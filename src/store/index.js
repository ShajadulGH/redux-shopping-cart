import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import cartslice from "./cart-slice";
const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    cart: cartslice,
  },
});
export default store;
