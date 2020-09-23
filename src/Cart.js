import React from "react";
import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import transitions from "@material-ui/core/styles/transitions";
import zIndex from "@material-ui/core/styles/zIndex";

function Cart() {
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    transition: "2s all ease-in-out",
    opacity: 0,
  };
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="cart__ad"
          alt=""
        />
        <h4>
          Hello,{" "}
          {user
            ? `${user?.email
                .substring(0, user.email.lastIndexOf("@"))
                .toUpperCase()}`
            : "Guest"}
        </h4>
        <h2 className="cart__basketTitle">
          {basket.length !== 0 ? (
            "Your Shopping Cart"
          ) : (
            <>
              <h4>Your Shopping Cart Is Empty</h4>
            </>
          )}
        </h2>
        <FlipMove
          duration={1000}
          enterAnimation={{
            from: {
              transform: "rotateX(280deg)",
              transform: "translateX(100%)",
              opacity: 0.1,
              zIndex: 100,
            },
            to: {
              transform: "",
            },
          }}
          leaveAnimation={{
            from: {
              transform: "",
            },
            to: {
              transform: "rotateX(-120deg)",
              zIndex: 100,
              opacity: 0.1,
            },
          }}
        >
          {basket.length !== 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                title={item.title}
                image={item.image}
                rating={item.rating}
                id={item.id}
                key={item.id}
                price={item.price}
              />
            ))
          ) : (
            <>
              <h5 className="cart__basketTitle">
                Nothing is there in your Cart........Click on{" "}
                <Link to="/" className="link">
                  'Add to Cart'
                </Link>{" "}
                to add to the cart
              </h5>
              <center>
                <img src="./empty.png" alt="" className="nope" />
              </center>
            </>
          )}
        </FlipMove>
      </div>
      <div className="cart__right">{basket.length !== 0 && <Subtotal />}</div>
    </div>
  );
}

export default Cart;
