import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [highlitedBtn, setHighlitedBtn] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberofCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${highlitedBtn ? classes.bump : ""} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlitedBtn(true);

    const timer = setTimeout(() => {
      setHighlitedBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.show}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
