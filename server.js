import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import testRoute from "./routes/test-route.js";
import authRouter from "./routes/auth-route.js";
import eventRouter from "./routes/event-route.js";

const app = express();
import { connect } from "./db/connect.js";
import {
  getCreateSessionCookie,
  getDeleteSessionCookie,
  validateSessionToken,
} from "./lib/auth.js";

dotenv.config();

connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// auth middleware
app.use(async (req, res, next) => {
  const token = req.cookies.session;
  if (token === null) {
    res.locals.user = null;
    res.locals.session = null;
    return next();
  }

  const { session, user } = await validateSessionToken(token);

  if (session === null) {
    res.appendHeader("Set-Cookie", getDeleteSessionCookie());
    res.locals.session = null;
    res.locals.user = null;
    return next();
  }
  res.appendHeader(
    "Set-Cookie",
    getCreateSessionCookie(token, session.expires_at)
  );
  res.locals.session = session;
  res.locals.user = user;
  return next();
});

app.use("/auth", authRouter);
app.use("/test", testRoute);
app.use("/events", eventRouter);

app.listen(8000 || process.env.PORT, () =>
  console.log("SERVER STARTED " + (process.env.PORT || 8000))
);
