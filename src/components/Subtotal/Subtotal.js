import React from "react";
import style from "../../components/Subtotal/Subtotal.module.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Subtotal() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  let price = state.basket
    .map((item) => Number(item.price))
    .reduce((total, item) => total + item, 0);
  return (
    <>
      <div>
        <p>
          Subtotal({state.basket.length} items):<strong>${price}</strong>
        </p>
      </div>
      <button className={style.button}>Proceed to Buy</button>
    </>
  );
}

export default Subtotal;
