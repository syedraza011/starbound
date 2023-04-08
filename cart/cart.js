import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    setCartItems(JSON.parse(items) || []);
  }, []);

  const handleAddOne = (id) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleSubtractOne = (id) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity -= 1;
    setCartItems(newCartItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(newCartItems.filter((item) => item.quantity > 0))
    );
  };

  const handleInputChange = (e, id) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity = e.target.value;
    setCartItems(newCartItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(newCartItems.filter((item) => item.quantity > 0))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  let totalCost = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCost += cartItems[i].price * cartItems[i].quantity;
  }

  const cartItemsElements = cartItems.map((item) => (
    <div className={styles.cartitem} key={item.id} item={item}>
      <div className={styles.cartitemdetails}>
        <p className={styles.cartitemdeparture}>
          Departure Origin: {item.depart}
          Departure Origon: {item.depart}
        </p>
        <p className={styles.cartitemdate}>Departure Date: {item.depardate}</p>
        <div className={styles.cartitemquantitycontainer}>
          <button
            className={styles.cartitemquantitybutton}
            onClick={() => handleSubtractOne(item.id)}
          >
            -
          </button>
          <input
            className={styles.cartitemquantitycontainer}
            type="number"
            value={item.quantity || 1}
            onChange={handleInputChange}
          />
          <button
            className={styles.cartitemquantitybutton}
            onClick={() => handleAddOne(item.id)}
          >
            +
          </button>
        </div>
        <p className={styles.cartitemprice}>Price per Dragon: {item.price}</p>
        <p className={styles.cartitemprice}>
          Item Total: {item.price * item.quantity}
        </p>
      </div>
    </div>
  ));

  return (
    <div className={styles.cartcontainer}>
      <Link href="/flights"></Link>
      <div className={styles.cartcontainer}>{cartItemsElements}</div>
      <button className={styles.btnStyle} onClick={handleClearCart}>
        CLEAR CART:
      </button>
      <h4>Total Cost:</h4>
      <Link href="/checkout">
        <button className={styles.clearcartbutton} onClick={handleClearCart}>
          Proceed to Checkout
        </button>
      </Link>

      <div className="main"></div>
    </div>
  );
};

export default Cart;
