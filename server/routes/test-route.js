import { Router } from "express";
const router = Router();
import { testRouteGetController } from "../controllers/test.js"

router.get("/", testRouteGetController);

export default router;
