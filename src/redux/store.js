import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";
import icecreamReducer from "./slices/icecreamSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer },
});

export default store;
