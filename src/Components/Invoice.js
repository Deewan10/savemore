import React, { useState, useEffect } from 'react';
import FloatingDatePicker from './FloatingDatePicker.js';

function Invoice() {
  const [items, setItems] = useState([{ id: 1, name: '', rate: 0, quantity: 0, total: 0 }]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [history, setHistory] = useState([]);
  
  const [invoiceNumber, setInvoiceNumber] = useState(1001);

  // Customer information states
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Load saved invoices from sessionStorage when the component mounts
  useEffect(() => {
    const savedHistory = sessionStorage.getItem('invoiceHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Calculate total sales
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  // Handle input changes for each item
  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };

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

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const saveInvoiceToHistory = () => {
    if (!selectedDate) {
      alert("Please select a date to save the invoice.");
      return;
    }

    const entry = {
      invoiceNumber,
      customerName,
      customerAddress,
      customerPhone,
      date: selectedDate.toISOString(), // Store as ISO string
      items: [...items],
      totalSales: calculateSubtotal(),
      timestamp: new Date(), // Store current timestamp
    };
    
    const updatedHistory = [...history, entry];
    setHistory(updatedHistory);
    sessionStorage.setItem('invoiceHistory', JSON.stringify(updatedHistory)); // Save to sessionStorage
    alert("Invoice saved to history.");
    setInvoiceNumber(invoiceNumber + 1);
  };

  const getFilteredHistory = () => {
    return history.filter(entry => entry.date && new Date(entry.date).toDateString() === selectedDate?.toDateString());
  };

  const handleFocus = (id, field) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item };
        if (field === 'rate' && updatedItem.rate === 0) {
          updatedItem.rate = ''; 
        }
        if (field === 'quantity' && updatedItem.quantity === 0) {
          updatedItem.quantity = ''; 
        }
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const loadHistory = (entry) => {
    setItems(entry.items);
    setSelectedDate(new Date(entry.date)); 
    setCustomerName(entry.customerName);
    setCustomerAddress(entry.customerAddress);
    setCustomerPhone(entry.customerPhone);
    
    entry.timestamp = new Date(entry.timestamp); 
  };

  const getHighlightedDates = () => {
    return history.map(entry => new Date(entry.date));
  };
  
  return (
    <div className='invoice'>
      <h2>Invoice Generator</h2>
      
      <div className='customer-info'>
        <h3>Customer Information</h3>
        <input 
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Customer Name"
          style={{ marginBottom: '5px', padding: '10px', width: '100%' }}
        />
        <input 
          type="text"
          value= {customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          placeholder="Customer Address"
          style={{ marginBottom: '5px', padding: '10px', width: '100%' }}
        />
        <input 
          type="text"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          placeholder="Customer Phone"
          style={{ marginBottom: '5px', padding: '10px', width: '100%' }}
        />
      </div>

      <div className='date'>
        <FloatingDatePicker 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate} 
          highlightedDates={getHighlightedDates()} 
        />
      </div>

      <div className='tab'>
        <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderColor: '#5757ea' }}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
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
                    onFocus={() => handleFocus(item.id, 'rate')}
                    color='#5e940d'
                    placeholder="Rate"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleInputChange(item.id, 'quantity', e.target.value)}
                    onFocus={() => handleFocus(item.id, 'quantity')}
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
          <tfoot>
            <tr>
              <td><strong>Total:</strong></td>
              <td></td>
              <td></td>
              <td><strong>{calculateSubtotal()}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <button onClick={addItem} style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#5757ea', color: 'white' }}>
          Add Item
        </button>

        <h3>Total Sales: ${calculateSubtotal()}</h3>
      </div>

      <div className="history">
        <button onClick={saveInvoiceToHistory} style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#5757ea', color: 'white' }}>
          Save to History
        </button>
        <h3>Saved History:</h3>
        <div className="history-cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {getFilteredHistory().map((entry, index) => (
            <div key={index} className="history-card" onClick={() => loadHistory(entry)} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px', cursor: 'pointer' }}>
              <p><strong>Customer:</strong> {entry.customerName}</p>
              <p><strong>Date:</strong> {new Date(entry.date).toDateString()}</p> {/* Convert entry.date to Date */}
              <p><strong>Time:</strong> {new Date(entry.timestamp).toLocaleTimeString()}</p> {/* Convert timestamp to Date */}
              <p><strong>Total Sales:</strong> ${entry.totalSales}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Invoice;
