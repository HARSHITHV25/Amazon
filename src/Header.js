import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import Hamburger from "./Hamburger";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="navbars">
      <div className="header">
        <Hamburger className="menu" />
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            className="header__logo"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">
                Hello,{" "}
                {user
                  ? `${user?.email
                      .substring(0, user.email.lastIndexOf("@"))
                      .toUpperCase()}`
                  : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <a href="https://netflix-clone-25.web.app">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </a>
          <div className="header__optionBasket">
            <Link to="/cart">
              <ShoppingCartIcon className="header__basketIcon" />
            </Link>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
