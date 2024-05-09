import Router from "express";
import { getRecomandation } from "../Controllers/Ai.controller.js";

const aiRouter = Router();

aiRouter.post("/", getRecomandation);

export { aiRouter };
