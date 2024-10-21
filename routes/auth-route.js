import { Router } from "express";
const router = Router();
import {
  signUpController,
  signInController,
  signOutController,
} from "../controllers/auth.js";

router.post("/sign-up", signUpController);
router.post("/sign-in", signInController);
router.post("/sign-out", signOutController);

export default router;
