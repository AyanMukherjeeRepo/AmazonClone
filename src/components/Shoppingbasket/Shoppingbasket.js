import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import style from "../../components/Shoppingbasket/Shoppingbasket.module.css";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
function Shoppingbasket() {
  const [state, dispatch] = useStateValue();
  console.log(state.basket.map((item) => item));
  return (
    <div className={style.basket}>
      {state.basket.map((item) => {
        return <ShoppingItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Shoppingbasket;
