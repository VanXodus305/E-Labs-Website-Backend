import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

import {
  addMember,
  getMemberDetails,
  getMembers,
} from "../controllers/member.js";

const router = Router();

router.post("/add-member", upload.single("image"), addMember);
router.get("/get-members", getMembers);
router.post("/get-member", getMemberDetails);

export default router;
