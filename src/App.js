import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { customActionCreator } from "./store/cart-slice";
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
    dispatch(customActionCreator(cart));
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
