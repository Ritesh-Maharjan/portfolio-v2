import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// using two city, inorder to replace the city with correct data when user inputs wrong address
type City = {
  right: string;
  wrong: string;
};

const initialState: City = { right: "Vancouver", wrong: "Vancouver" };

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeRightCity: (state, action: PayloadAction<string>) => {
      state.right = action.payload;
    },
    changeWrongCity: (state, action: PayloadAction<string>) => {
      state.wrong = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeRightCity, changeWrongCity } = citySlice.actions;

export default citySlice.reducer;
