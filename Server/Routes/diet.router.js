import { Router } from "express";
import { DietUser } from "../Controllers/Diet.controller.js";
import { requireAuth } from "../middleware/authantication.middleware.js";

const dietRouter = Router();

dietRouter.get("/food", DietUser);

export { dietRouter };
