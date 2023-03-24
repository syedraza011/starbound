import react from "react";
import Link from "Next/link";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";
import flight from "../pages/flightCard";
import { data } from "autoprefixer";

const EditFlight = (id) => {
  const [depart, setDeparture] = useState("");
  const [departime, setDepartime] = useState("");
  const [depardate, setDepardate] = useState("");
  const [arrivetime, setArrivetime] = useState("");
  const [arrivedate, setArrivedate] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!depart || !arrivetime || !arrivedate || !departime || !depardate) {
      setFormError("Please fill out the required fields");
      return;
    }
    console.log(
      "Hello new obj",
      depart,
      departime,
      depardate,
      arrivetime,
      arrivedate
    );

    const { data, error } = await supabase
      .from("flight")
      .select("depart,departime,depardate,arrivetime,arrivedate");
    // .eq('id',flight.id)
    // .single()
    if (error) {
      console.log(error);
      setFormError("Please fill out the required fields");
    }
    if (data) {
      setDeparture(data.departure);
      setDepartime(data.departime);
      setDepardate(data.depardate);
      setArrivetime(data.arrivetime);
      setArrivedate(data.arrivedate);
      setFormError(null);
    }
  };

  return (
    <>
      <div>
        <h1>Update Flight Information page</h1>

        <form>
          {/* <form className="Form bg-zinc-200" onSubmit={handleSubmit}> */}
          <div className="flex justify-center">
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
              {/* -------------------------------------- */}
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
              {/* ------------------------------------------------------ */}
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

              {/* ------------------------ */}

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
      </div>
    </>
  );
};
export default EditFlight;
