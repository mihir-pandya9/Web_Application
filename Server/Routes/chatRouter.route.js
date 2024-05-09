import { Router } from "express";
import {
  accessChat,
  addToGroup,
  createGroupChat,
  fetchChats,
  removeFromGroup,
  renameGroup,
} from "../Controllers/chat.controller.js";
import { protect } from "../middleware/auto.middleware.js";

const chatRouter = Router();

chatRouter.post("/", protect, accessChat);
chatRouter.get("/", protect, fetchChats);
chatRouter.post("/group", protect, createGroupChat);
chatRouter.put("/rename", protect, renameGroup);
chatRouter.put("/groupremove", protect, removeFromGroup);
chatRouter.put("/groupadd", protect, addToGroup);

export { chatRouter };
