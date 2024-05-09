import asyncHandler from "express-async-handler";
import {
  Abs,
  Calves,
  Legs,
  Shoulders,
  Stretching,
  WarmUp,
  back,
  biceps,
  chest,
  triceps,
} from "../public/temp/Workout.js";

const workoutUser = asyncHandler(async (req, res) => {
  const keyword = req.query.muscles;

  if (keyword === "biceps") {
    res.status(200).json(biceps);
  }

  if (keyword === "triceps") {
    res.status(200).json(triceps);
  }

  if (keyword === "chest") {
    res.status(200).json(chest);
  }

  if (keyword === "back") {
    res.status(200).json(back);
  }

  if (keyword === "legs") {
    res.status(200).json(Legs);
  }

  if (keyword === "abs") {
    res.status(200).json(Abs);
  }

  if (keyword === "stretching") {
    res.status(200).json(Stretching);
  }

  if (keyword === "warmup") {
    res.status(200).json(WarmUp);
  }

  if (keyword === "calves") {
    res.status(200).json(Calves);
  }

  if (keyword === "shoulders") {
    res.status(200).json(Shoulders);
  }
});

export { workoutUser };
