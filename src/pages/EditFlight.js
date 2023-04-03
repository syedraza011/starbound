import react from "react";
import Link from "next/link";
import { useState } from "react";
import robsStyles from "@/styles/robsStyles/Flights.module.css"
import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";
// import FlightCard from "../pages/flightCard";
import { data } from "autoprefixer";

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
    <div className={robsStyles.editFlightBox} >
    <h1 className={robsStyles.editFlightHead} >UPDATE FLIGHT INFO</h1>
    <form className={robsStyles.editFlightDtl} >
      <div className={robsStyles.editFlightInpt} >
        <label htmlFor="departure" >DEPART ORIGIN:</label>
        <input 
        className={robsStyles.editFlightInpt}
        type="text" 
        id="departure"
        value={depart}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="DEPART ORIGIN:" >
        </input>
      </div>

      <div className={robsStyles.editFlightInpt} >
        <label htmlFor="departuretime" >DEPART TIME:</label>
        <input 
        className={robsStyles.editFlightInpt}
        type="text" 
        id="departuretime"
        value={depart}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="DEPART TIME:" >
        </input>
      </div>

      <div className={robsStyles.editFlightInpt} >
        <label htmlFor="departuredate" >DEPART DATE:</label>
        <input 
        className={robsStyles.editFlightInpt}
        type="text" 
        id="departuredate"
        value={depart}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="DEPART DATE:" >
        </input>
      </div>

      <div className={robsStyles.editFlightInpt} >
        <label htmlFor="arrivaltime" >ARRIVE DATE:</label>
        <input 
        className={robsStyles.editFlightInpt}
        type="text" 
        id="arrivaltime"
        value={depart}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="ARRIVE DATE:" >
        </input>
      </div>

      <div className={robsStyles.editFlightInpt} >
        <label htmlFor="arrivaldate" >ARRIVE DATE:</label>
        <input 
        className={robsStyles.editFlightInpt}
        type="text" 
        id="arrivaldate"
        value={depart}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="ARRIVE DATE:" >
        </input>
      </div>
      <div className={robsStyles.editFlightBttn} >
        <button className={styles.btnStyle}>
      <Link href="/flights">Update data</Link>
    </button>
      </div>
      
    </form>
    </div>

      {/* <div className={robsStyles.editFlightBox} >
        <h1 className={robsStyles.editFlightHead} >UPDATE FLIGHT INFO</h1>
          <form className="Form bg-zinc-200" onSubmit={handleSubmit}>
          <div className="flex justify-center" >
            <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
              <input
                type="text"

                id="departure"
                value={depart}
                onChange={(e) => setDeparture(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Departure Origon"
              />
              <div className="border-red-800">
                <hr />
              </div>

              <label
                htmlFor="departure"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Departure Origon
              </label>

              <input
                type="text"
                id="departuretime"
                value={departime}
                onChange={(e) => setDepartime(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Departure time"
              />
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="departureTime"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Departure Time
              </label>

              <input
                type="text"
                id="departuretime"
                value={depardate}
                onChange={(e) => setDepardate(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Departure Date"
              />
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="departureDate"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Departure Date
              </label>

              <input
                type="text"
                id="arrivetime"
                value={arrivetime}
                onChange={(e) => setArrivetime(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Arrival time"
              />
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="arrivalTime"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Arrival Time
              </label>

              <input
                type="text"
                id="arrivetime"
                value={arrivedate}
                onChange={(e) => setArrivedate(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Arrival Date"
              />
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="arrivalDate"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Arrival Date
              </label>

              <button className={styles.btnStyle}>
                <Link href="/flights">Update data</Link>
              </button>
            </div>
          </div>
        </form>
      </div> */}

      <div className="main"></div>
    </>
  );
};

export default EditFlight;
