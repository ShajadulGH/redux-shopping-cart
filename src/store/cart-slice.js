import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    replace(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.amount++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          amount: newItem.amount,
        });
        state.totalAmount++;
      }
    },
    remove(state, action) {
      const itemToRemove = action.payload;
      const id = itemToRemove.id;
      const price = itemToRemove.price;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount--;
      } else {
        existingItem.amount--;
        existingItem.totalPrice -= price;
      }
    },
  },
});

export const cartActions = cartslice.actions;
export default cartslice.reducer;
