import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  FormInfo: [
    {
      id: 1,
      firstname: "123",
      lastname: "456",
      phoneno: "1234",
      email: "anc@gmail.com",
      lifestyle: "Light",
      age: "20",
      weight: "60",
      height: "167",
      gender: "Male",
      bmi: "20",
      calorie: "50",
    },
  ],
};

export const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      const info = {
        id: nanoid(),
        firstname: action.payload,
        lastname: action.payload,
        phoneno: action.payload,
        email: action.payload,
        lifestyle: action.payload,
        age: action.payload,
        weight: action.payload,
        height: action.payload,
        gender: action.payload,
        bmi: action.payload,
        calorie: action.payload,
      };
      state.FormInfo.push(info);
    },
  },
});

export const { addInfo } = FormSlice.actions;

export default FormSlice.reducer;
