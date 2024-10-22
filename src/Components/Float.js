import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Float({ selectedDate, setSelectedDate, highlightedDates }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const customDayClassName = (date) => {
    return highlightedDates.has(date.toDateString()) ? 'highlighted-date' : '';
  };

  return (
    <div>
      <button className='datee' onClick={toggleDatePicker} style={{ marginBottom: '10px' }}>
        {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
      </button>
      {isDatePickerOpen && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setIsDatePickerOpen(false); // Close the date picker after selecting a date
          }}
          inline
          dayClassName={customDayClassName}
        />
      )}
      <style>{`
        .highlighted-date {
          background-color: orange !important;
          border-radius: 50%;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Float;
