// routes/member.js
import express from "express";
import { addMember } from "../controllers/member.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/add-member", upload.single("image"), addMember);

export default router;
