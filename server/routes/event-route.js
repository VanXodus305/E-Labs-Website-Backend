import Router from "express";
import { upload } from "../middlewares/multer.middleware.js";
// import { checkAccess } from "../middlewares/checkAccess.middleware.js";

import {
  addEvent,
  registerForEvent,
  getEvents,
} from "../controllers/events.js";

const router = Router();

router.post("/add-event", upload.single("image"), addEvent);
router.post("/register-for-event", registerForEvent);
router.get("/get-events", getEvents);

export default router;
