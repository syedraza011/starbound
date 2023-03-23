import react from "react";
import Link from "next/link";
import supabase from "../../supabase";
// import FlightCard from "./flightCard";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/Flights.module.css";
import { useEffect, useState } from "react";
const Flights = () => {
  // function handleSubmit=(e)=>{
  console.log("ZHello i am here");
  // }
  <h1>Flights</h1>;

  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [flights, setflights] = useState(null);

  useEffect(() => {
    const fecthFlights = async () => {
      const { data, error } = await supabase.from("flight").select();
      if (error) {
        setFetchError("Could not fecth flights data");
        setflights(null);
        console.log("Error: ", error);
      }
      if (data) {
        setflights(data);
        setFetchError(null);
      }
    };
    fecthFlights();
  }, []);

  return (
    <>
    <div className={robStyles.flightsBox} >
      <p className={robStyles.textBox} >
        Welcome to Starbound Flights, the premier space tourism company for
        those seeking a truly out-of-this-world experience. Our mission is to
        make space travel accessible and safe for everyone, so that you can
        experience the thrill of exploring the cosmos for yourself. At
        Starbound, we offer a range of exciting and unforgettable space travel
        experiences, from short suborbital flights to longer stays aboard the
        International Space Station. Our state-of-the-art spacecraft are
        designed for maximum comfort and safety, so you can relax and enjoy the
        ride while our experienced crew takes care of everything else. Whether
        you’re a space enthusiast looking to fulfill a lifelong dream, an
        adventurer seeking a new challenge, or simply looking to experience the
        awe-inspiring beauty of the universe, Galactic Adventures has a space
        travel package that’s perfect for you. Our team of experts will guide
        you through every step of the process, from pre-flight training to your
        actual space flight, to ensure that you have a safe, enjoyable, and
        truly unforgettable experience. So why wait? Contact us today to start
        planning your journey to the stars with Starbound!
      </p>
      <div className={robStyles.btnBox} >
        <button className={styles.btnstyle}>Add a new flight</button>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {flights && (
        <div className="flights">
          {/* {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))} */}
        </div>
      )}
    </div>
    <div class="main"></div>
    </>
    
    
  );
};

export default Flights;
