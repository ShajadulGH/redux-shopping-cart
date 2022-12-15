import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const toggle = useSelector((state) => state.toggle.toggle);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://redux-shopping-cart-d9ca0-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify({ cart }),
      }
    );
  }, [cart]);
  console.log(toggle);
  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
