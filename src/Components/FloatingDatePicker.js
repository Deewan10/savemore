import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FloatingDatePicker({ selectedDate, setSelectedDate, highlightedDates }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // Format date to "day, month, year"
  };

  return (
    <div>
      <button className='datee' onClick={toggleDatePicker} style={{ marginBottom: '10px' }}>
        {selectedDate ? ` Date: ${formatDate(selectedDate)}` : 'Select Date'}
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
            dayClassName={date => 
              highlightedDates.some(highlightedDate => 
                highlightedDate.toDateString() === date.toDateString()
              ) ? 'highlighted' : undefined
            }
          />
        </div>
      )}
    </div>
  );
}

export default FloatingDatePicker;
