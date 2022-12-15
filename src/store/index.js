import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import cartslice from "./cart-slice";
import notification from "./notification";
const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    cart: cartslice,
    notification: notification,
  },
});
export default store;
