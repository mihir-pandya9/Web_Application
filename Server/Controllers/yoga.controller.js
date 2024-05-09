import asyncHandler from "express-async-handler";
import { yoga } from "../public/temp/yoga.js";

const getYoga = asyncHandler(async (req, res) => {
  res.status(200).send(yoga);
});

export { getYoga };
