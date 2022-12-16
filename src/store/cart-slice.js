import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notification";
const cartslice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
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
export const customActionCreator = (cart) => {
  return (dispatch) => {
    const sentCart = async () => {
      dispatch(
        notificationActions.notification({
          status: "",
          title: "Cart Sending...",
          message: "Sending the cart!",
        })
      );
      const response = await fetch(
        "https://redux-shopping-cart-d9ca0-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ cart }),
        }
      );
      if (response.ok) {
        dispatch(
          notificationActions.notification({
            status: "success",
            title: "Cart Sent",
            message: "Successfully sent cart!",
          })
        );
      }
      const data = response.json();
      console.log(data);
    };
    sentCart().catch((error) => {
      dispatch(
        notificationActions.notification({
          status: "error",
          title: "Cart Sending failed!!",
          message: "Failed to send the cart!",
        })
      );
    });
  };
};
export const cartActions = cartslice.actions;
export default cartslice.reducer;
