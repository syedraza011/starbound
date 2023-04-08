import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../supabase";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import Cart from "./cart";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Flights = () => {
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const [fetchError, setFetchError] = useState(null);
  const [flights, setflights] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = (e) => {
    console.log("handleCart");
    setShowCart(!showCart);
    if (showCart) {
      <Cart />;
    } else {
      setShowCart(false);
    }
  };
  const handleEdit = (id) => {
    router.push(`/flights/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("flight").delete().eq("id", id);
      if (error) {
        throw error;
      }
      setflights((prevFlights) => {
        return prevFlights.filter((flight) => flight.id !== id);
      });
    } catch (error) {
      console.log("Error deleting flight: ", error);
    }
  };

  const handleAddToCart = (flight) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingCartItem = existingCartItems.find(
      (item) => item.id === flight.id
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      setCartItems(existingCartItems);
      alert("Item already in cart, quantity updated");
    } else {
      const updatedCartItems = [
        ...existingCartItems,
        { ...flight, quantity: 1 },
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      alert("Item added to cart");
    }
  };

  useEffect(() => {
    const fetchFlights = async () => {
      const { data, error } = await supabase.from("flight").select();
      if (error) {
        setFetchError("Could not fetch flights data");
        setflights(null);
        console.log("Error: ", error);
      }
      if (data) {
        setflights(data);
        setFetchError(null);
      }
    };
    fetchFlights();

    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <>
      <button onClick={handleCartClick} className={robStyles.flightsBox}>
        Cart
        {/* <Cart /> */}
      </button>
      <p className={robStyles.textBox}>
        Welcome to Starbound Flights, the premier space tourism company for
        those seeking a truly out-of-this-world experience. Our mission is to
        make space travel accessible and safe for everyone, so that you can
        experience the thrill of exploring the cosmos for yourself.
      </p>
      <div>
        <Link className={styles.btnStyle} href="/AddFlight">
          Add New Flight
        </Link>

        {fetchError && <p>{fetchError}</p>}
        {flights && (
          <div className={robStyles.flightCardText}>
            {flights.map((flight, index) => (
              <div key={index}>
                <h1>
                  {flight.depart} to {flight.destination}
                  <span />
                </h1>
                <p>
                  Depart Origon: <span />
                  {flight.depart}
                </p>
                <p>
                  Depart Time: <span />
                  {flight.departime}
                </p>
                <p>
                  Depart Date: <span />
                  {flight.depardate}
                </p>
                <p>
                  Return Time: <span />
                  {flight.returntime}
                </p>
                <p>
                  Return Date: <span />
                  {flight.returndate}
                </p>
                <p>
                  Dragon Price: $ <span />
                  {flight.price}
                </p>
                <div className={robStyles.flightCardBttn}>
                  <button
                    className={styles.btnStyle}
                    onClick={() => handleEdit(flight.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.btnStyle}
                    onClick={() => handleDelete(flight.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.btnStyle}
                    onClick={() => handleAddToCart(flight)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="main"></div>
    </>
  );
};

export default Flights;
