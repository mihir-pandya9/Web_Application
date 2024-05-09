import { Router } from "express";
import { workoutUser } from "../Controllers/workout.controller.js";
import { requireAuth } from "../middleware/authantication.middleware.js";

const workoutRouter = Router();

workoutRouter.get("/", requireAuth, workoutUser);

export { workoutRouter };
