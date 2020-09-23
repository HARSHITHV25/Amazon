import React, { useEffect, useState } from "react";
import "./Orders.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      {orders.length !== 0 ? (
        <div className="orders">
          <h1>Your Orders</h1>
          <div className="orders__order">
            {orders?.map((order) => (
              <Order order={order} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1>
            <center>
              <strong>
                <em>
                  <i>No Orders</i>
                </em>
              </strong>
            </center>
          </h1>
          <center>
            <img
              src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Animated-loading-bar-gif-transparent-background-6-.gif"
              alt=""
            />
          </center>
        </>
      )}
    </>
  );
}

export default Orders;
