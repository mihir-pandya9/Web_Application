import { Router } from "express";
import { requireAuth } from "../middleware/authantication.middleware.js";
import { generateaiChat } from "../Controllers/aichat.controller.js";

const aiChatRouter = Router();

aiChatRouter.post("/", requireAuth, generateaiChat);

export { aiChatRouter };
