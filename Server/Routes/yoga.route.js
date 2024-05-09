import { Router } from "express";
import { getYoga } from "../Controllers/yoga.controller.js";
import { requireAuth } from "../middleware/authantication.middleware.js";

const yogaRouter = Router();

yogaRouter.get("/", requireAuth, getYoga);

export { yogaRouter };
