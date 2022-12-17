import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
const CartButton = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log("working");
    dispatch(toggleActions.toggle());
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      {totalAmount > 0 && <span className={classes.badge}>{totalAmount}</span>}
    </button>
  );
};

export default CartButton;
