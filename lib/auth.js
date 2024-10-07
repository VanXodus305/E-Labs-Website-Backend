import { Session } from "../models/user.js";

import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

export function generateSessionToken() {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
}

export async function createSession(token, user_id) {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session = {
    _id: sessionId,
    user_id,
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
  };
  await Session.create(session);
  return session;
}

export async function validateSessionToken(token) {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const result = await Session.findById(sessionId).populate("user_id");
  if (!result) {
    return { session: null, user: null };
  }
  const { user_id: user, expires_at, _id } = result;
  const session = {
    _id,
    expires_at,
  };
  if (Date.now() >= session.expires_at.getTime()) {
    await Session.findByIdAndDelete(session._id);
    return { session: null, user: null };
  }
  if (Date.now() >= session.expires_at.getTime() - 1000 * 60 * 60 * 24 * 2) {
    session.expires_at = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5);
    await Session.findByIdAndUpdate(session._id, {
      expires_at: session.expires_at,
    });
  }

  const userAttributes = {
    _id: user._id,
    role: user.role,
    email: user.email,
    //NOTE: uncomment if we need more fields in future
    // username: user.username,
    // fullName: user.fullName,
  };
  return { session, user: userAttributes };
}

export async function invalidateSession(sessionId) {
  await Session.findByIdAndDelete(sessionId);
}

export async function invalidateUserSession(user_id) {
  await Session.findOneAndDelete({
    user_id,
  });
}

export function getCreateSessionCookie(token, expires_at) {
  if (process.env.NODE_ENV === "production") {
    return `session=${token}; HttpOnly; SameSite=Lax; Expires=${expires_at.toUTCString()}; Path=/; Secure;`;
  } else {
    return `session=${token}; HttpOnly; SameSite=Lax; Expires=${expires_at.toUTCString()}; Path=/`;
  }
}

export function getDeleteSessionCookie() {
  if (process.env.NODE_ENV === "production") {
    return "session=; HttpOnly; SameSite=Lax; Max-Age=0; Path=/; Secure;";
  } else {
    return "session=; HttpOnly; SameSite=Lax; Max-Age=0; Path=/";
  }
}
