import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 0,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    sell: (state, action) => {
      state.numberOfCakes = state.numberOfCakes - 1;
    },
    restock: (state, action) => {
      state.numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

export const { sell, restock } = cakeSlice.actions;

export default cakeSlice.reducer;
