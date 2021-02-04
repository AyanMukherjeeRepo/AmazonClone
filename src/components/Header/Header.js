import React from "react";
import style from "../../components/Header/Header.module.css";
import logo from "../../assets/img/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
function Header() {
  const [state, dispatch] = useStateValue();
  console.log(state.basket.length);
  const handleauthentication = () => {
    auth.signOut();
  };
  return (
    <div className={style.header}>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>

      <div className={style.search}>
        <input type="text" className={style.searchbox} />
        <SearchIcon className={style.searchicon} />
      </div>
      <div className={style.nav}>
        <Link to={state.user ? "/" : "/login"}>
          <div className={style.option} onClick={handleauthentication}>
            <span className={style.optionone}>
              Hello {state.user ? state.user.email : "Guest"}
            </span>
            <span className={style.optiontwo}>
              Sign {state.user ? "Out" : "In"}
            </span>
          </div>
        </Link>
        <div className={style.option}>
          <span className={style.optionone}>Returns</span>
          <span className={style.optiontwo}>& Orders</span>
        </div>
        <div className={style.option}>
          <span className={style.optionone}>Your</span>
          <span className={style.optiontwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={style.optionbasket}>
            <ShoppingBasketIcon className={style.basket} />
            <span className={style.basketcount}>{state.basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
