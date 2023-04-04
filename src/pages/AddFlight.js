import { useState } from "react";
import supabase from "../../supabase";
import Link from "next/link";
import TimeOption from "./TimeOption";
import DateOption from "./DateOption";
import styles from "@/styles/Home.module.css";
import robStyle from "@/styles/robsStyles/Flights.module.css"
import { MdAssignmentReturn } from 'react-icons/md'
import DatePicker from "react-datepicker";
import TimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddFlight() {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [departime, setDepartime] = useState("");
  const [depardate, setDepardate] = useState("");
  const [returntime, setReturntime] = useState("");
  const [returndate, setReturndate] = useState("");
  const [price, setPrice] = useState("");

  const handleDepardateChange = (date) => {
    console.log("afterhandle", date);
    setDepardate(date);
  };

  const handleDeparSelectTime = (time) => {
    console.log();
    setDepartime(time);
  };

  const handleReturnSelectTime = (time) => {
    setReturntime(time);
  };
  const handleReturnDateChange = (date) => {
    setReturndate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit ander");

    console.log("depart:", depart);
    console.log("destination:", destination);
    console.log("departime:", departime);
    console.log("depardate:", depardate);
    console.log("returntime:", returntime);
    console.log("returndate:", returndate);
    console.log("price:", price);

    const { data, error } = await supabase.from("flight").insert([
      {
        depart,
        destination,
        departime,
        depardate,
        returntime,
        returndate,
        price,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      console.log("Flight added successfully:", data);
      // reset form fields
      setDepart("");
      setDestination("");
      setDepartime("");
      setDepardate("");
      setReturntime("");
      setReturndate("");
      setPrice("");
    }
  };

  return (
    <>
    <div className={robStyle.addFlightBox } >
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <Link  className={styles.btnStyle } href="/flights">
        <span 
        // className="text-2xl leading-none"
        >
          {/* &larr; */}
          < MdAssignmentReturn/>
        </span>
      </Link>
      <div className={robStyle.addFlightSbmt} >
        <label htmlFor="depart" className="block">
          DEPART ORIGIN:
        </label>
        <input
          placeholder="Place of Dragon Departure"
          type="text"
          id="depart"
          name="depart"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
          // className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500 color:black"
          className={robStyle.addFlightSbmt}
        />

        <label htmlFor="destination" className="block">
          DESTINATION:
        </label>
        <input
          placeholder="Dragon Destination fpr example: Mars, Space, etc"
          type="text"
          id="destination"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          // className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
          className={robStyle.addFlightSbmt}
        />

        <label
          // className="block text-gray-700 text-sm font-bold mb-2"
          
          htmlFor="departime"
        >
          DEPART TIME:
        </label>
        <TimeOption onSelectTime={handleDeparSelectTime} />

        <label htmlFor="depardate" className="block">
          DEPART DATE:
        </label>
        <DateOption
          // className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
          className={robStyle.addFlightSbmt}
          onChange={handleDepardateChange}
        />

        <label
          // className="block text-gray-700 text-sm font-bold mb-2"
          
          htmlFor="departime"
        >
          RETURN TIME:
        </label>
        <TimeOption onSelectTime={handleReturnSelectTime} />

        <label htmlFor="depardate" className="block">
          RETURN DATE:
        </label>

        <DateOption onChange={handleReturnDateChange} />

        <label>
          PRICE:
          <input
            placeholder="Dragon Prince"
            // className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
            className={robStyle.addFlightSbmt}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" className={styles.btnStyle}>
            ADD NEW FLIGHT
          </button>
        </div>
      </div>
    </form>
    </div>
    
    </>
    
  );
}

export default AddFlight;
