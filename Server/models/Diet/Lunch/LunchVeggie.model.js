import mongoose, { Schema } from "mongoose";

const dietSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    kcal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const DietVeggie = mongoose.model("DietVeggie", dietSchema);

export { DietVeggie };
