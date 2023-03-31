import { useState } from "react";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import supabase from "../../supabase";

const AddFlight = () => {
  function timeFixer(time) {
    setDepartime(time);
    console.log("timeFiexer", time);
  }

  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [depart, setDeparture] = useState("");
  const [price, setPrice] = useState("");
  const [departime, setDepartime] = useState("");
  const [depardate, setDepardate] = useState(null);
  const [arrivetime, setArrivetime] = useState("");
  const [arrivedate, setArrivedate] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmit = async (e) => {
  

    // useEffect =
    //   (() => {
    //     const updateDeparTime = depardate.toLocalDate("en-US");
    //     console.log("updateDate", updateDeparTime);
    //     setDepartime(updateDeparTime);

    //     const updatedeparDate = depardate.toLocalDate("en-US");
    //     console.log("updateDate", updatedeparDate);
    //     setDepardate(updatedeparDate);
    //   },
    //   []);

    e.preventDefault();
    if (
      !depart ||
      !arrivetime ||
      !arrivedate ||
      !departime ||
      !depardate ||
      !price
    ) {
      setFormError("Please fill out the required fields");
      return;
    }
    console.log("Company Name:", depart);
    console.log("depart Time:", departime);
    console.log("depart depardate:", depardate);
    console.log("depart arrivetime:", arrivetime);
    console.log("depart  arrivedate:", arrivedate);
    console.log("Dragon price:", price);

    const { data, error } = await supabase
      .from("flight")
      .insert([
        { depart, departime, depardate, arrivetime, arrivedate, price },
      ]);
    if (error) {
      console.log(error);
      setFormError("Please fill out the required fields");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <>
      <div>
        <h1>Add Flight page</h1>
        <form className="Form bg-zinc-200" onSubmit={handleSubmit}>
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

              <TimePicker
                placeholderText="Select Time Slots"
                selected={departime}
                onChange={(time) => setDepartime(time)}
                //  {
                //   let trimTime=time.toLocaleString('en-US')

                //   setDepartime(trimTime)}
                // }
                showTimeSelect
                isClearable
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="hh:mm:ss aa"
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

              <DatePicker
                placeholderText="Select Depart Date"
                selected={depardate}
                onChange={(depardate) => setDepardate(depardate)}
                dateFormat="yyyy-MM-dd"
                isClearable
                showYearDropdown
                scrollableYearDropdown
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

              <TimePicker
                placeholderText="Select Arival Time"
                selected={arrivetime}
                onChange={(arrivetime) => setArrivetime(arrivetime)}
                showTimeSelect
                isClearable
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="hh:mm:ss aa"
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

              {/* --------------changing---------- */}
              <DatePicker
                placeholderText="Select Arrival Date"
                selected={arrivedate}
                onChange={(date) => setArrivedate(date)}
                dateFormat="yyyy-MM-dd"
                isClearable
                showYearDropdown
                scrollableYearDropdown
              />
              {/* <input
                type="text"
                id="arrivetime"
                value={arrivedate}
                onChange={(e) => setArrivedate(date)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Arrival Date"
              /> */}
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="arrivalDate"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Arrival Date
              </label>
              {/* ------------changing above------------------ */}

              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Dragon price"
              />
              <div className="border-red-800">
                <hr />
              </div>
              <label
                htmlFor="price"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Dragon Price
              </label>
              <button className={styles.btnStyle}>Submit data</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddFlight;
