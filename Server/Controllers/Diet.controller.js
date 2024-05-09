import {
  DietMorinig,
  BeforeBreakfast,
  DietNuts,
  BreakFast,
  Lunch_Salad,
  Lunch_Veggie,
  Lunch_Base,
  Evening_Snak,
  Dinner,
} from "../public/temp/DietData.js";
import asyncHandler from "express-async-handler";
const DietUser = asyncHandler(async (req, res) => {
  const name = req.query.search;

  if (name === "morning") {
    res.status(200).send(DietMorinig);
  }

  if (name === "before-breakfast-juices") {
    res.status(200).send(BeforeBreakfast);
  }

  if (name === "before-breakfast-nuts") {
    res.status(200).send(DietNuts);
  }

  if (name === "breakfast") {
    res.status(200).send(BreakFast);
  }

  if (name === "lunch-salads") {
    res.status(200).send(Lunch_Salad);
  }

  if (name === "lunch-veggie") {
    res.status(200).send(Lunch_Veggie);
  }

  if (name === "lunch-roti") {
    res.status(200).send(Lunch_Base);
  }

  if (name === "evening-snack") {
    res.status(200).send(Evening_Snak);
  }

  if (name === "dinner") {
    res.status(200).send(Dinner);
  }

  if (!name) {
    res
      .status(200)
      .send([
        DietMorinig,
        BeforeBreakfast,
        DietNuts,
        BreakFast,
        Lunch_Salad,
        Lunch_Veggie,
        Lunch_Base,
        Evening_Snak,
        Dinner,
      ]);
  }
});

export { DietUser };
