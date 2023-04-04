import react from "react";
import Link from "next/link";
import supabase from "../../supabase";
import FlightCard from "./FlightCard";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { useEffect, useState } from "react";
import Checkout from "./checkout";
import Image from "next/image";
import Img1 from "/public/Imgs/Img1.jpg";
import Img2 from "/public/Imgs/Img2.jpg";
import { width } from "@mui/system";

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
          <h1 class="text-2xl font-extrabold ">WELCOME TO STARBOUND</h1>
          <br></br>
          <p class="font-semibold">
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

      <Image src={Img1} alt="/" width={3121}></Image>
      {/* <Image src={Img2} alt="/" width={3121}></Image> */}
      <br></br>
      <br></br>
      <div className="text-center">
        <div className={styles.outFlightBox}>
          <h1 className="text-2xl font-extrabold text-gray-500 text-center  hover:text-blue-600">
            Flights Departing Soon
          </h1>

          <div>
            <div className={robStyles.flightsBox}>
              {fetchError && <p>{fetchError}</p>}
              {flights && (
                <>
                  {flights.map((flight) => (
                    <>
                      <br></br>
                      <h3 className="text-gray-500 text-md pb-2 font-extrabold hover:text-blue-600">
                        Departure From: {flight.depart}
                      </h3>
                      <br></br>

                      <p className="text-gray-500 text-md pb-2 font-bold hover:text-blue-600">
                        Time: {flight.departime}
                      </p>

                      <p className="text-gray-500 text-md pb-2 font-bold hover:text-blue-600">
                        Date: {flight.depardate}
                      </p>

                      <br></br>

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
        {/* <div className={styles.someElseBox}>
          <h1>Graphics box</h1>
          <p>Add some images</p>
        </div> */}
        <div className="main"></div>
      </div>
      <div className="main"></div>
    </>
  );
};

export default Home;
