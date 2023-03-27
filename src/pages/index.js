import react from "react";
import Link from "next/link";
import supabase from "../../supabase";
import FlightCard from "./FlightCard";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { useEffect, useState } from "react";
import Checkout from "./checkout";
const Home = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [flights, setflights] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      const { data, error } = await supabase.from("flight").select();
      if (error) {
        setFetchError("Could not fecth flights data");
        setflights(null);
        console.log("Error: ", error);
      }
      if (data) {
        console.log(data);
        setflights(data);
        setFetchError(null);
      }
    };
    fetchFlights();
  }, []);

  return (
    <>
      <div className={styles.indexBox}>
        <div className={styles.welcBox}>
          <h1>WELCOME TO STARBOUND</h1>

          <p>
            Our state-of-the-art spacecraft are designed for maximum comfort and
            safety, so you can relax and enjoy the ride while our experienced
            crew takes care of everything else. Whether you’re a space
            enthusiast looking to fulfill a lifelong dream, an adventurer
            seeking a new challenge, or simply looking to experience the
            awe-inspiring beauty of the universe, Galactic Adventures has a
            space travel package that’s perfect for you. Our team of experts
            will guide you through every step of the process, from pre-flight
            training to your actual space flight, to ensure that you have a
            safe, enjoyable, and truly unforgettable experience.
          </p>
        </div>
      </div>
      <div>
      <div className={styles.outFlightBox}>
        <h1>Flights departing soon...</h1>

        <div>
          <div className={robStyles.flightsBox}>
            {fetchError && <p>{fetchError}</p>}
            {flights && (
              <>
                {flights.map((flight) => (
                  <>
                    <h3>Departure Origon: {flight.depart}</h3>
                    <p>Flight Time: {flight.departime}</p>
                    <p>Flight Date: {flight.depardate}</p>

                    <hr></hr>
                  </>
                ))}
              </>
            )}
            <button className={styles.btnStyle}>
              <Link href="/flights">More Flights</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.someElseBox}>
        <h1>Graphics box</h1>
        <p>Add some images</p>
      </div>
      </div>
    </>
  );
};

export default Home;
