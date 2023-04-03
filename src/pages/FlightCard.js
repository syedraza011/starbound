import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import supabase from "../../supabase";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin2Fill } from "react-icons/ri"
import { BiAddToQueue } from "react-icons/bi"
import Link from "next/link";


  const handleDeleteClick = () => {
    onDelete(flight.id);
  };

  const handleEditClick = () => {
    onEdit(flight);
    router.push({
      pathname: "/EditFlight",
      query: { id: flight.id },
    });
  };

  return (
    <>
      <div>
        {/* <Link className={styles.btnStyle} href="/AddFlight">
          Add a new flight
        </Link> */}
      </div>
      <div className={robStyles.flightCardBox}>
        <div>
          <div className={styles.card}>
            <h3>Flight Id for test: {flight.id}</h3>
            <h3>Departure Origon: {flight.depart}</h3>
            <p>Flight Time: {flight.departime}</p>
            <p>Flight Date: {flight.depardate}</p>

            <p>Arrival time: {flight.arrivetime}</p>

            <p>Arrival Date: {flight.arrivedate}</p>
            <div className={robStyles.flightCardBttn} >
              {/* <span  > */}
              <button className={styles.btnStyle} onClick={handleDelete}>
                < RiDeleteBin2Fill />
              </button>
              <button className={styles.btnStyle}>
                <Link href={{ pathname: "/EditFlight", state: flight.id }}>
                  < AiFillEdit />
                </Link>
              </button>
              
              <button className={styles.btnStyle} >
                <Link href="/AddFlight">
                  < BiAddToQueue />
                </Link>
              </button>
              {/* </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
