import { hash, verify } from "@node-rs/argon2";
import { User } from "../models/user.js";
import {
  createSession,
  getCreateSessionCookie,
  getDeleteSessionCookie,
  generateSessionToken,
  invalidateSession,
  invalidateUserSession,
} from "../lib/auth.js";

export const signUpController = async (req, res) => {
  try {
    const { email, password, username, fullName } = req.body;
    // TODO: Add validation
    if (!email || typeof email !== "string") {
      return res.send("Invalid email").status(400);
    }
    if (!password || typeof password !== "string" || password.length < 6) {
      return res.send("Invalid password").status(400);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email address already exists",
      });
    }

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const user = await User.create({
      email,
      password: passwordHash,
      username,
      fullName,
    });
    const token = generateSessionToken();
    const session = await createSession(token, user._id);
    const session_cookie = getCreateSessionCookie(token, session.expires_at);
    return res
      .status(201)
      .setHeader("Set-Cookie", session_cookie)
      .json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Email already exists" });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // TODO: Add validation
    if (!email || typeof email !== "string") {
      return res.send("Invalid email").status(400);
    }
    if (!password || typeof password !== "string" || password.length < 6) {
      return res.send("Invalid password").status(400);
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const validPassword = await verify(user.password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Invalidate all existing sessions for this user
    await invalidateUserSession(user._id);

    const token = generateSessionToken();
    const session = await createSession(token, user._id);
    const session_cookie = getCreateSessionCookie(token, session.expires_at);
    return res
      .status(200)
      .setHeader("Set-Cookie", session_cookie)
      .json({ message: "Sign in successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Invalid email or password" });
  }
};

export const signOutController = async (_, res) => {
  if (!res.locals.session) {
    return res.status(401).end();
  }
  await invalidateSession(res.locals.session.id);
  return res
    .setHeader("Set-Cookie", getDeleteSessionCookie())
    .json({ message: "Sign out successfully" });
};
