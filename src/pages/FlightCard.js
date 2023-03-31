import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Flights.module.css";
import { useRouter } from "next/router";

const FlightCard = ({ flight, onDelete, onEdit }) => {
  const router = useRouter();

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
    <div className={robStyles.flightBox}>
      <div className={robStyles.titleBox}>
        <h3 className={robStyles.title}>{flight.name}</h3>
      </div>
      <div className={robStyles.infoBox}>
        <p className={robStyles.detail}>Launch Date: {flight.launch_date}</p>
        <p className={robStyles.detail}>Destination: {flight.destination}</p>
        <p className={robStyles.detail}>Duration: {flight.duration}</p>
        <p className={robStyles.detail}>Price: {flight.price}</p>
        <div className={robStyles.btnGroup}>
          <button className={styles.btnStyle} onClick={handleEditClick}>
            Edit
          </button>
          <button className={styles.btnStyle} onClick={handleDeleteClick}>
            Delete
          </button>
          <Link href={`/flights/${flight.id}`}
            className={styles.btnStyle}>View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
