// FloatingDatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FloatingDatePicker({ selectedDate, setSelectedDate }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <div>
      <button onClick={toggleDatePicker} style={{ marginBottom: '10px' }}>
        {selectedDate ? `Selected Date: ${selectedDate.toLocaleDateString()}` : 'Select Date'}
      </button>

      {isDatePickerOpen && (
        <div style={{ position: 'absolute', zIndex: 1000, backgroundColor: '#fff', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setIsDatePickerOpen(false); 
            }}
            inline
          />
        </div>
      )}
    </div>
  );
}

export default FloatingDatePicker;
