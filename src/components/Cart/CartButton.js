import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
const CartButton = (props) => {
  const toggle = useSelector((state) => state.toggle);
  console.log(toggle);
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log("working");
    dispatch(cartActions.toggle());
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
