// routes/feedback.js
import Router from "express";

// import { validateSessionToken } from "../lib/auth.js";
import { addFeedback, getFeedback } from "../controllers/feedback.js";
// import { get } from "mongoose";

const router = Router();

// router.use(async (req, res, next) => {
//   const token = req.cookies.session;
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const { session, user } = await validateSessionToken(token);
//   if (!session) {
//     return res.status(401).json({ message: "Session expired" });
//   }

//   res.locals.user = user;
//   next();
// });

router.post("/add-feedback", addFeedback);
router.get("/get-feedback", getFeedback);

export default router;
