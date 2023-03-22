import styles from "@/styles/Home.module.css";
import Link from "next/link";
const FlightCard = ({ flight }) => {
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
      <div>
        <div className={styles.card}>
          <h3>Departure Origon: {flight.depart}</h3>
          <p>Flight Date: {flight.departuredate}</p>
          <p>Flight Time: {flight.time}</p>
          <p>Arrival time: {flight.arrival}</p>

          <p>Arrival Date: {flight.arrivaldate}</p>
          <div>
            <button className={styles.btnStyle}>Edit</button>
            {/* <button className={styles.btnStyle} onClick={handdleDelete}>
              Delete
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default FlightCard;
