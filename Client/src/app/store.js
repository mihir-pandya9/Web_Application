import { configureStore } from "@reduxjs/toolkit";
import FormSilce from "../feature/FormSilce";

export const store = configureStore({
  reducer: FormSilce,
});
