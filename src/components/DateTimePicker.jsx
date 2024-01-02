// components/DateTimePicker.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { CalendarIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-row">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        //   showTimeSelect
        //   timeFormat="HH:mm"
        timeIntervals={15}
        //   timeCaption="Time"
        //   dateFormat="MMMM d, yyyy h:mm aa"
        dateFormat="MMMM d, yyyy"
      />
      <CalendarIcon className="h-5 w-5 text-gray-400" />

      {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </div> */}
    </div>
  );
};

export default DateTimePicker;
