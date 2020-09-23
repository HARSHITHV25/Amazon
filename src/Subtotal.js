import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const [total, setTotal] = useState(0);
  useEffect(() => {}, []);
  return (
    <div className="cart__checkout">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="cart__subtotal">
              Subtotal (<span>{basket.length}</span> items):{" "}
              <strong className="strongy">{value}</strong>
            </p>
            <div className="cart__gift">
              <input type="checkbox" name="" id="" />
              <p>
                <small>This order contains a gift</small>
              </p>
            </div>
            <button
              onClick={(e) => history.push("/payment")}
              className="checkout"
            >
              <span>Proceed to Checkout</span>
            </button>
          </>
        )}
        decimalScale={2}
        value={basket?.reduce((amount, item) => item.price + amount, 0)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Subtotal;
