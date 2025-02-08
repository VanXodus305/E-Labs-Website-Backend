// routes/feedback.js
import express from "express";

import { validateSessionToken } from "../lib/auth.js";
import { addFeedback } from "../controllers/feedback.js";

const router = express.Router();

router.use(async (req, res, next) => {
  const token = req.cookies.session;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { session, user } = await validateSessionToken(token);
  if (!session) {
    return res.status(401).json({ message: "Session expired" });
  }

  res.locals.user = user;
  next();
});

router.post("/add-feedback", addFeedback);

export default router;
