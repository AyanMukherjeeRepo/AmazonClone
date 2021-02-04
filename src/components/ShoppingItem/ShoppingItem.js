import React from "react";
import style from "../../components/ShoppingItem/ShoppingItem.module.css";
import Stars from "../Stars/Stars";
import { useStateValue } from "../StateProvider/StateProvider";
function ShoppingItem(props) {
  const [state, dispatch] = useStateValue();
  console.log(props);
  const removefrombasket = () => {
    console.log(props.item.id);
    dispatch({ type: "REMOVE_FROM_BASKET", payload: props.item.id });
  };
  return (
    <div className={style.item}>
      <img src={props.item.image} className={style.img} />
      <div className={style.right}>
        <p>
          <strong>{props.item.title}</strong>
        </p>
        <br />
        <strong>${props.item.price}</strong>
        <br />
        <Stars count={props.item.rating} />
        <button className={style.button} onClick={removefrombasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;
