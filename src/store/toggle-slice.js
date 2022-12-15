import { createSlice } from "@reduxjs/toolkit";
const initialCart = {
  toggle: false,
};
const toggleSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
