import { Router } from "express";
import {
  authUser,
  registerUser,
  getUser,
} from "../Controllers/User.controller.js";
// import { protect } from "../middleware/auto.middleware.js";
import { registerForm } from "../Controllers/register.controller.js";
import { requireAuth } from "../middleware/authantication.middleware.js";

const userRouter = Router();

userRouter.post("/signup", registerUser);
userRouter.post("/", authUser);
// userRouter.get("/signup", protect, allUsers);
userRouter.get("/user", requireAuth, getUser);
userRouter.post("/signup/register", registerForm);
// userRouter.get("/signup/register",getRegister)

export { userRouter };
