import React, { useState } from 'react';
import FloatingDatePicker from './FloatingDatePicker.js';

function Invoice() {
  // State to store items in the invoice
  const [items, setItems] = useState([
    { id: 1, name: '', rate: 0, quantity: 0, total: 0 }
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [history, setHistory] = useState([]); // State to store history of saved transactions
  const [title, setTitle] = useState("Invoice Title"); // Customizable title

  // Calculate total sales
  const calculateTotalSales = () => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  // Handle input changes for each item
  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };

        // Calculate the total amount for the item
        if (field === 'rate' || field === 'quantity') {
          const rate = parseFloat(updatedItem.rate) || 0;
          const quantity = parseInt(updatedItem.quantity, 10) || 0;
          updatedItem.total = rate * quantity;
        }

        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Add a new row for another item
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: '',
      rate: 0,
      quantity: 0,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  // Remove an item from the invoice
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Save the current state of the invoice to history
  const saveInvoiceToHistory = () => {
    if (!selectedDate) {
      alert("Please select a date to save the invoice.");
      return;
    }

    const entry = {
      title, // Save the title to history
      date: selectedDate,
      items: [...items], // Make a copy of the current items
      totalSales: calculateTotalSales(), // Save total sales in history
      timestamp: new Date() // Store the exact time the invoice was saved
    };

    setHistory([...history, entry]);
    alert("Invoice saved to history.");
  };

  // Function to filter history by selected date
  const getFilteredHistory = () => {
    return history.filter(entry => entry.date && entry.date.toDateString() === selectedDate?.toDateString());
  };

  // Function to load history back into the invoice
  const loadHistory = (entry) => {
    setItems(entry.items);
    setSelectedDate(entry.date);
    setTitle(entry.title);
  };

  return (
    <div className='invoice'>
      <h2>Invoice Calculator</h2>
      <div className='date'>
        <FloatingDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      {/* Customizable title input */}
      <div className='title'>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          style={{ marginBottom: '10px', padding: '10px', width: '100%', fontSize: '16px',  fontWeight: 'normal' }}
        />
      </div>

      <div className='tab'>
        <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderColor: '#5757ea' }}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleInputChange(item.id, 'name', e.target.value)}
                    placeholder="Item Name"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => handleInputChange(item.id, 'rate', e.target.value)}
                    placeholder="Rate"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleInputChange(item.id, 'quantity', e.target.value)}
                    placeholder="Quantity"
                  />
                </td>
                <td>{item.total.toFixed(2)}</td>
                <td>
                  <button className='btn' onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', paddingLeft: '5px' }}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* Total row */}
          <tfoot>
            <tr>
              <td><strong>Total:</strong></td>
              <td></td>
              <td></td>
              <td><strong>{calculateTotalSales()}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <button onClick={addItem} style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#5757ea', color: 'white' }}>
          Add Item
        </button>

        <h3>Total Sales: ${calculateTotalSales()}</h3>
      </div>

      {/* History Section */}
      <div className="history">
        <button onClick={saveInvoiceToHistory} style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#5757ea', color: 'white' }}>
          Save to History
        </button>
        <h3>Saved History:</h3>
        <div className="history-cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {getFilteredHistory().map((entry, index) => (
            <div key={index} className="history-card" onClick={() => loadHistory(entry)} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px', cursor: 'pointer' }}>
              <h4>{entry.title}</h4>
              <p><strong>Date:</strong> {entry.date.toDateString()}</p>
              <p><strong>Time:</strong> {entry.timestamp.toLocaleTimeString()}</p>
              <p><strong>Total Sales:</strong> ${entry.totalSales}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Invoice;
