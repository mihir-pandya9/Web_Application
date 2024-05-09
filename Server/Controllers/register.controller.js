import asyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError.js";
import { Register } from "../models/RegistrationForm/Register.model.js";

const registerForm = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    lifeStyle,
    age,
    height,
    weight,
    gender,
    bmi,
    calories,
    email,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !lifeStyle ||
    !age ||
    !height ||
    !weight ||
    !gender ||
    !bmi ||
    !calories ||
    !email
  ) {
    return new ApiError(400, "all fields is required to fill");
  }

  const createRegistration = await Register.create({
    firstName,
    lastName,
    lifeStyle,
    age,
    height,
    weight,
    gender,
    email,
    bmi,
    calories,
  });

  if (createRegistration) {
    res.status(201).json({
      _id: createRegistration.id,
      firstName: createRegistration.firstName,
      lastName: createRegistration.lastName,
      age: createRegistration.age,
      height: createRegistration.height,
      weight: createRegistration.weight,
      gender: createRegistration.gender,
      email: createRegistration.email,
      bmi: createRegistration.bmi,
      calories: createRegistration.calories,
    });
  } else {
    throw new ApiError(400, "Failed to create Registration Form");
  }
});

export { registerForm };
