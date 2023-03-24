import styles from "@/styles/Home.module.css";
import robStyles from '@/styles/robsStyles/FlightCard.module.css'
import { AiFillEdit } from 'react-icons/ai'
import Link from "next/link";

const FlightCard = ( flight ) => {
  // flight = this.props;
  const handdleDelete = ((id) => {
    e.preventDefault();
    console.log("Hello new obj");

    // { data, error } = await supabase
    //       .from("flight")
    //       .delete()
    //       .single(id)
    //     if (error) {
    //       console.log(error);
    //       setFormError("Please fill out the required fields");
    //     }
    //     if (data) {
    //       console.log(data);
    //       setFormError(null);
    //     }
  });

  return (
    <>
    <div>
      <Link className={styles.btnStyle} href="/AddFlight">
        Add a new flight
      </Link>
    </div>
    <div className={robStyles.flightCardBox} >
      <div>
        <div className={styles.card}>
          <h3>Departure Origon: {flight.depart}</h3>
          <p>Flight Time: {flight.departime}</p>
          <p>Flight Date: {flight.depardate}</p>
          <p>Arrival time: {flight.arrivetime}</p>
          <p>Arrival Date: {flight.arrivedate}</p>
        {/* <div> */}
          <button className={styles.btnStyle}>Edit <AiFillEdit /> </button>
            {/* <button className={styles.btnStyle} onClick={handdleDelete}>
              Delete
            </button> */}
        {/* </div> */}
        </div>
      </div>
    </div>
    <div class="main"></div>
      
    </>
  );
};
export default FlightCard;
