import React, { useState } from "react";
import Select from "react-select";
import moment from "moment";
import robStyles from "@/styles/robsStyles/Other.module.css"

const TimeOption = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeOptions = [
    { value: "00:00:00", label: "12:00 am" },
    { value: "01:00:00", label: "1:00 am" },
    { value: "02:00:00", label: "2:00 am" },
    { value: "03:00:00", label: "3:00 am" },
    { value: "04:00:00", label: "4:00 am" },
    { value: "05:00:00", label: "5:00 am" },
    { value: "06:00:00", label: "6:00 am" },
    { value: "07:00:00", label: "7:00 am" },
    { value: "08:00:00", label: "8:00 am" },
    { value: "09:00:00", label: "9:00 am" },
    { value: "10:00:00", label: "10:00 am" },
    { value: "11:00:00", label: "11:00 am" },
    { value: "12:00:00", label: "12:00 pm" },
    { value: "13:00:00", label: "1:00 pm" },
    { value: "14:00:00", label: "2:00 pm" },
    { value: "15:00:00", label: "3:00 pm" },
    { value: "16:00:00", label: "4:00 pm" },
    { value: "17:00:00", label: "5:00 pm" },
    { value: "18:00:00", label: "6:00 pm" },
    { value: "19:00:00", label: "7:00 pm" },
    { value: "20:00:00", label: "8:00 pm" },
    { value: "21:00:00", label: "9:00 pm" },
    { value: "22:00:00", label: "10:00 pm" },
    { value: "23:00:00", label: "11:00 pm" },
  ];

  const convertTimeToString = (time) => {
    if (time) {
      return moment(time, "HH:mm:ss").format("hh:mm:ss a");
    }
    return null;
  };

  const handleTimeChange = (time) => {
    // setSelectedTime(time);
    // onSelectTime(moment(time.value, "HH:mm:ss").format("hh:mm:ss"));
    setSelectedTime(time);
    const timeString = convertTimeToString(time?.value);
    onSelectTime(timeString);
  };

  return (
    <div >
      <Select
        value={selectedTime}
        onChange={handleTimeChange}
        options={timeOptions}
        formatOptionLabel={({ label }) =>
          moment(label, "hh:mm a").format("hh:mm a")
        }
        placeholder="Select a time"
        isClearable
        className={robStyles.styleBox}
      />
    </div>
  );
};

export default TimeOption;
