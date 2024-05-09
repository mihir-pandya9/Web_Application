import { Router } from "express";
import { allMessages, sendMessage } from "../Controllers/Message.controller.js";
import { protect } from "../middleware/auto.middleware.js";

const router = Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

export { router };
