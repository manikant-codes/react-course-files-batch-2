import { createSlice } from "@reduxjs/toolkit";

const initialState = { numberOfIcecreams: 0, cash: 100 };

const icecreamSlice = createSlice({
  name: "icecream",
  //   initialState: initialState,
  initialState,
  reducers: {
    sell: (state, action) => {
      console.log(state);
      state.numberOfIcecreams--;
      state.cash += 10;
    },
    restock: (state, action) => {
      console.log("payload", action.payload);
      state.numberOfIcecreams += action.payload;
      const cost = action.payload * 7;
      state.cash -= cost;
    },
    // addToCash: (state, payload) => {},
    // subtractFromCash: (state, payload) => {},
  },
});

export const { sell, restock } = icecreamSlice.actions;
export default icecreamSlice.reducer;
