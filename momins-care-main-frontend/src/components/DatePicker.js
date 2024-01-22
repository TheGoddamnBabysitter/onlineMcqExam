import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DatePicker.css";

function DatePickerComponent({ selectedDate, setSelectedDate }) {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);

  //   const formatDate = (date) => {
  //     if (!date) return "";
  //     const day = date.getDate();
  //     const month = date.getMonth() + 1;
  //     const year = date.getFullYear();
  //     return `${day}/${month}/${year}`;
  //   };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="dob">Date of Birth:</label>
      <DatePicker
        id="dob"
        name="dob"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        showYearDropdown
        showMonthDropdown
        yearDropdownItemNumber={50}
        scrollableYearDropdown
        maxDate={new Date(currentYear, 11, 31)}
        required
      />
    </div>
  );
}

export default DatePickerComponent;
