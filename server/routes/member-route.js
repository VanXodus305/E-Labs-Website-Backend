// routes/member.js
import express from "express";
import { addMember } from "../controllers/member.js";

const router = express.Router();

router.post("/add-member", addMember);

export default router;
