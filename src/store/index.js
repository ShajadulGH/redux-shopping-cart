import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCart = {
  toggle: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
