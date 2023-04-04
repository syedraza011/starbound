import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../supabase";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import Cart from "../pages/cart";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Flights = () => {
  const router = useRouter();
  const [fetchError, setFetchError] = useState(null);
  const [flights, setflights] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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
      <div className={robStyles.flightsBox}>
        <Cart />
        <div className={styles.btnStyle}>
          <Link href="/cart">
            {" "}
            <BsFillCartCheckFill />{" "}
          </Link>
        </div>
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
            <div className="flights">
              {flights.map((flight, index) => (
                <div key={index} className={robStyles.flightCardBox}>
                  <h2 className={robStyles.flightCardText}>
                    {flight.depart} <span /> {flight.destination}
                  </h2>
                  <p className={robStyles.flightCardText}>
                    Depart Origon: <span />
                    {flight.depart}
                  </p>
                  <p className={robStyles.flightCardText}>
                    Depart Time: <span />
                    {flight.departime}
                  </p>
                  <p className={robStyles.flightCardText}>
                    Depart Date: <span />
                    {flight.depardate}
                  </p>
                  <p className={robStyles.flightCardText}>
                    Return Time: <span />
                    {flight.returntime}
                  </p>
                  <p className={robStyles.flightCardText}>
                    Return Date: <span />
                    {flight.returndate}
                  </p>
                  <p className={robStyles.flightCardText}>
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
      </div>
    </>
  );
};

export default Flights;
