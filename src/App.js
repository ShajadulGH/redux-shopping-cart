import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartSendAction } from "./store/cart-actions";
import { cartGetAction } from "./store/cart-actions";
import { useEffect } from "react";
import Notification from "./components/notification/Notification";
let dontFetchOnFirstLoad = true;
function App() {
  const toggle = useSelector((state) => state.toggle.toggle);
  const cart = useSelector((state) => state.cart);
  const change = useSelector((state) => state.cart.change);
  console.log(cart);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartGetAction());
  }, [dispatch]);

  useEffect(() => {
    if (dontFetchOnFirstLoad) {
      dontFetchOnFirstLoad = false;
      return;
    }

    if (change) {
      dispatch(cartSendAction(cart));
    }
  }, [cart, dispatch, change]);
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
