import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "./store/notification";
import { useEffect } from "react";
import Notification from "./components/notification/Notification";
let dontFetchOnFirstLoad = true;
function App() {
  const toggle = useSelector((state) => state.toggle.toggle);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification.notification);
  console.log(notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dontFetchOnFirstLoad) {
      dontFetchOnFirstLoad = false;
      return;
    }
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
  }, [cart, dispatch]);
  console.log(toggle);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
