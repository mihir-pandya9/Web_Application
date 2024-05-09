import asyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError.js";

const getRecomandation = asyncHandler(async (req, res) => {
  const { Mucles, Intensity_Level } = req.body;

  if (!Mucles || !Intensity_Level) {
    throw new ApiError(400, "Missing Fields in Recomandation");
  }

  res.send({ Mucles, Intensity_Level });
});

export { getRecomandation };
