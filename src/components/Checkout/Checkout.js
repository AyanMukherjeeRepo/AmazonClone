import React from "react";
import style from "../../components/Checkout/Checkout.module.css";
import Shoppingbasket from "../Shoppingbasket/Shoppingbasket";
import { useStateValue } from "../StateProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
function Checkout() {
  const [state, dispatch] = useStateValue();
  return (
    <div className={style.checkout}>
      <div className={style.left}>
        <div className={style.asection}>
          <strong>
            Pay faster for all your shopping needs with Amazon Pay balance
          </strong>
          <br />
          <small>
            Get Instant refund on cancellations | Zero payment failures
          </small>
        </div>
        <div className={style.checkouttitle}>
          <strong>Hi {state.user?.email}</strong>
          <h2>Your shopping Basket</h2>
          <Shoppingbasket />
        </div>
      </div>
      <div className={style.right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
