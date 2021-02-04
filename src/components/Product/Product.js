import React from "react";
import style from "../../components/Product/Product.module.css";
import Stars from "../Stars/Stars";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className={style.product}>
      <div className={style.info}>
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={style.rating}>
          <Stars count={rating} />
        </div>
      </div>
      <img src={image} alt="iphonese" className={style.productimage} />
      <button className={style.button} onClick={addtobasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
