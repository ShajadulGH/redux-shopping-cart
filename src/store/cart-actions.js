import { cartActions } from "./cart-slice";
import { notificationActions } from "./notification";

export const cartGetAction = () => {
  return async (dispatch) => {
    const getCart = async () => {
      const response = await fetch(
        "https://redux-shopping-cart-d9ca0-default-rtdb.firebaseio.com/cart/cart.json"
      );
      const data = response.json();
      return data;
    };
    const fetchedCart = await getCart();

    dispatch(
      cartActions.replace({
        items: fetchedCart.items || [],
        totalAmount: fetchedCart.totalAmount,
      })
    );
  };
};
export const cartSendAction = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.notification({
        status: "",
        title: "Cart Sending...",
        message: "Sending the cart!",
      })
    );
    const sendCart = async () => {
      const response = await fetch(
        "https://redux-shopping-cart-d9ca0-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ cart }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendCart();
      dispatch(
        notificationActions.notification({
          status: "success",
          title: "Cart Sent",
          message: "Successfully sent cart!",
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.notification({
          status: "error",
          title: "Cart Sending failed!!",
          message: "Failed to send the cart!",
        })
      );
    }
  };
};
