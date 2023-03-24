import react, { useState } from "react";
import TimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Time = () => {
  const event = new Date("August 19, 1975 23:15:30");
  //display and sub state
  const [startTime, setStartTime] = useState(event);
  const [displayTime, setDisplayTime] = useState(event);

  console.log("Event", event.toDateString());
  console.log("Your time Starts now", startTime);

  const handleSubmit = async (e) => {
    startTime = startTime.toTimeString();
    console.log("T", t);
    e.preventDefault();
    setStartTime(t);

    console.log("Company Name:", startTime);
  };

  return (
    <>
      <div>Time</div>
      <form id="external-form" onClick={handleSubmit}>
        <TimePicker
          placeholderText="Select Time Slots"
          selected={startTime}
          onChange={(time) => setStartTime(time)}
          showTimeSelect
          isClearable
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="hh:mm:ss aa"
          // selected={startTime}
          // onChange={(date) => setStartTime(date.toTimeString())}
          required
          form="external-form"
        />

        {/* <input
          type="text"
          selected={startTime}
          onChange={() => {
            setDisplayTime(selected);
            console.log("display", displayTime);
          }}
        /> */}
        <button>Submit</button>
      </form>
    </>
  );
};
export default Time;
