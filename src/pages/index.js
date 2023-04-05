import react from "react";
import Link from "next/link";
import supabase from "../../supabase";

import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { useEffect, useState } from "react";

import Image from "next/image";
import Img1 from "../../public/Imgs/Img1.jpg";
import Img2 from "../../public/Imgs/Img2.jpg";
import Img3 from "../../public/Imgs/Img3.jpg";

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

      <Image src={Img1} alt="/" width={3121}></Image>
      <br></br>
      <Image src={Img2} alt="/" width={3121}></Image>
      <br></br>
      <Image src={Img3} alt="/" width={3121}></Image>

      {/* <div className="text-center">
        <div className={styles.outFlightBox}>
          <h1 className="text-2xl font-extrabold text-gray-500 text-center  hover:text-blue-600">
            Flights Departing Soon
          </h1>

          <div>
            <div className={robStyles.flightsBox}>
              {fetchError && <p>{fetchError}</p>}
              {flights && (
                <>
                  {flights.map((flight, index) => (
                    <>
                      <div key={index} flight={flight}>
                        <h3>Departure Origon: {flight.depart}</h3>
                        <p>Flight Time: {flight.departime}</p>
                        <p>Flight Date: {flight.depardate}</p>
                      </div>
                      <hr />
                      <br></br>
                      <h3 className="text-gray-500 text-md pb-2 font-extrabold hover:text-blue-600">
                        Departure From: {flight.depart}
                      </h3>
                      <br></br>

                      <p className="text-gray-500 text-md pb-2 font-bold  hover:text-blue-600">
                        Time: {flight.departime}
                      </p>

                      <p className="text-gray-500 text-md pb-2 font-bold  hover:text-blue-600">
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
      </div> */}
      {/* <div className={styles.someElseBox}>
        <Image src={gal} height="500" width="650" alt="" />
      </div> */}

      <div className="main"></div>
    </>
  );
};

export default Home;
