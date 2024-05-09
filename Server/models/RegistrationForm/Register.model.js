import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    lifeStyle: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bmi: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", registerSchema);

export { Register };
