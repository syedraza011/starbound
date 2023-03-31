import { useState } from "react";
import { useRouter } from "next/router";
import { TimePicker } from "@mui/lab";
import supabase from "../../supabase";

const EditFlight = ({ flight, onEdit }) => {
  // get the router instance
  const router = useRouter();

  // create state variables for each form field
  const [depart, setDepart] = useState(flight.depart);
  const [departDateTime, setDepartDateTime] = useState(
    new Date(flight.departDateTime)
  );
  const [arriveTime, setArriveTime] = useState(flight.arriveTime);
  const [arriveDate, setArriveDate] = useState(flight.arriveDate);
  const [price, setPrice] = useState(flight.price);

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // update the flight record in the database
    const { data, error } = await supabase
      .from("flight")
      .update({
        depart: depart,
        departDateTime: departDateTime,
        arriveTime: arriveTime,
        arriveDate: arriveDate,
        price: price,
      })
      .eq("id", flight.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onEdit(data[0]);
      router.push("/");
    }
  };

  return (
    <>
      <h1>Edit Flight</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Departure Origon:</label>
          <input
            type="text"
            value={depart}
            onChange={(event) => setDepart(event.target.value)}
          />
        </div>
        <div>
          <label>Departure Date & Time:</label>
          <TimePicker
            value={departDateTime}
            onChange={(newValue) => setDepartDateTime(newValue)}
            renderInput={(params) => <input {...params} />}
          />
        </div>
        <div>
          <label>Arrival time:</label>
          <input
            type="text"
            value={arriveTime}
            onChange={(event) => setArriveTime(event.target.value)}
          />
        </div>
        <div>
          <label>Arrival Date:</label>
          <input
            type="text"
            value={arriveDate}
            onChange={(event) => setArriveDate(event.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </>
  );
};

export default EditFlight;
