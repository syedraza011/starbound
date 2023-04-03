import react, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "../styles/Home.module.css";
import "react-datepicker/dist/react-datepicker.css";
const Time = () => {
  const [arrivetime, setArrivetime] = useState("");
  let event = new Date("August 19, 1975 23:15:30");
  //display and sub state
  const [startTime, setStartTime] = useState(event);
  const [displayTime, setDisplayTime] = useState(event);

  // console.log("Event", event.toDateString());
  // // console.log("Your time Starts now", startTime);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // console.log("Company Name:", startTime);
  };

  return (
    <div className={styles.indexBox}>
      <div>Time</div>
      <form id="external-form" onClick={handleSubmit}>
        <DatePicker
          placeholderText="Select Arrival Date"
          selected={arrivetime}
          // onChange={(date) => setArrivedate(date)}
          onChange={(date) => {
            date.toDateString();
            console.log("test date", date);
            setArrivetime(date);
          }}
          dateFormat="yyyy-MM-dd hh:mm aa"
          showTimeSelect
          isClearable
          showYearDropdown
          scrollableYearDropdown
        />
        <button type="submit" className={styles.btnStyle}>Submit</button>
      </form>
    </div>
  );
};
export default Time;
