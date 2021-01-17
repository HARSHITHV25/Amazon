import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import db from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${
          basket?.reduce((amount, item) => item.price + amount, 0) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };
    if (user) {
      console.log("User exists");
    } else {
      history.push("/login");
    }
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/cart">{basket?.length} Items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>
              {user
                ? `${user?.email
                    .substring(0, user.email.lastIndexOf("@"))
                    .toUpperCase()}, `
                : `Guest@${Math.floor(Math.random() * 200)}`}
            </p>
            <p>123 React Lane,</p>
            <p>Banglore, Karnataka, 560059</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>
              {user
                ? "Review Items and delivery"
                : "Please Sign In! In Order to continue"}
            </h3>
          </div>
          <div className="payment__items">
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
              {basket?.length !== 0 &&
                basket?.map((item) => (
                  <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    id={item.id}
                    key={item.id}
                    price={item.price}
                  />
                ))}
            </FlipMove>
          </div>
        </div>
        {basket?.length !== 0 && (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form action="" onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                {error && <div className="payment__error">{error}</div>}
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    decimalScale={3}
                    value={basket?.reduce(
                      (amount, item) => item.price + amount,
                      0
                    )}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"₹"}
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                  />
                  <button
                    disabled={processing || disabled || succeeded || error}
                  >
                    <span>
                      {processing ? (
                        <p className="processing">
                          Processing Your Card-Details{" "}
                          <img
                            src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/HopeWell.gif"
                            alt=""
                          />
                          <img
                            src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Animated-loading-bar-gif-transparent-background-6-.gif"
                            alt=""
                          />
                        </p>
                      ) : (
                        <p className="processing">Buy Now </p>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
