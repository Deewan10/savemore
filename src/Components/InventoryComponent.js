import React, { useState, useEffect } from 'react';
import Float from './Float'; 

function InventoryComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item', cost: 0, rate: 0, quantity: 0, profit: 0, total: 0 },
    { id: 2, name: 'Item', cost: 0, rate: 0, quantity: 0, profit: 0, total: 0 },
  ]);
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [history, setHistory] = useState([]);
  const [highlightedDates, setHighlightedDates] = useState(new Set());

  useEffect(() => {
    const savedHistory = sessionStorage.getItem('inventoryHistory');
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      setHistory(parsedHistory);
      const dates = new Set(parsedHistory.map(entry => new Date(entry.date).toDateString()));
      setHighlightedDates(dates);
    }
  }, []);

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  const calculateTotalProfit = () => {
    return items.reduce((total, item) => total + item.profit, 0).toFixed(2);
  };

  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };

        if (['cost', 'rate', 'quantity'].includes(field)) {
          const cost = parseFloat(updatedItem.cost) || 0;
          const rate = parseFloat(updatedItem.rate) || 0;
          const quantity = parseInt(updatedItem.quantity, 10) || 0;
          updatedItem.profit = (rate - cost) * quantity; 
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
      cost: 0,
      rate: 0,
      quantity: 0,
      profit: 0,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const saveToHistory = () => {
    if (!selectedDate) {
      alert("Please select a date to save the inventory.");
      return;
    }

    const entry = {
      date: selectedDate.toISOString(),
      items: [...items],
      totalSales: calculateSubtotal(),
      totalProfit: calculateTotalProfit(),
      timestamp: new Date(),
    };

    const updatedHistory = [...history, entry];
    setHistory(updatedHistory);
    sessionStorage.setItem('inventoryHistory', JSON.stringify(updatedHistory));

    // Highlight the selected date
    highlightedDates.add(selectedDate.toDateString());
    setHighlightedDates(new Set(highlightedDates));

    alert("Inventory saved to history.");
  };

  const getFilteredHistory = () => {
    return history.filter(entry => entry.date && new Date(entry.date).toDateString() === selectedDate?.toDateString());
  };

  const loadHistory = (entry) => {
    setItems(entry.items);
    setSelectedDate(new Date(entry.date));
  };

  return (
    <div className='inventory'>
      <h2>Inventory Manager</h2>
      <Float 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        highlightedDates={highlightedDates} // Pass highlighted dates to the date picker
      />
      
      <table border="1" cellPadding="10" style={{ width: '98%', marginBottom: '20px', borderColor: '#5757ea' }}>
        <thead style={{ backgroundColor: '#5757ea', color: '#fff' }}>
          <tr >
            <th>Item Name</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Quantity</th>
            <th>Profit</th> 
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
                  style={{ padding: '5px', width: '100%' }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.cost}
                  onChange={(e) => handleInputChange(item.id, 'cost', e.target.value)}
                  placeholder="Cost"
                  style={{ padding: '5px', width: '100%' }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => handleInputChange(item.id, 'rate', e.target.value)}
                  placeholder="Rate"
                  style={{ padding: '5px', width: '100%' }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(item.id, 'quantity', e.target.value)}
                  placeholder="Quantity"
                  style={{ padding: '5px', width: '100%' }}
                />
              </td>
              <td>{item.profit.toFixed(2)}</td> 
              <td>{item.total.toFixed(2)}</td> 
              <td>
                <button className='btn'
                  onClick={() => removeItem(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', fontSize: '14px' }}
                >
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
            <td></td>
            <td><strong>{calculateTotalProfit()}</strong></td> {/* Display total profit */}
            <td><strong>{calculateSubtotal()}</strong></td>    {/* Display total sales */}
            <td></td>
          </tr>
        </tfoot>
      </table>

      <button
        onClick={addItem}
        style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}
      >
        Add Item
      </button>

      <button
        onClick={saveToHistory}
        style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}
      >
        Save to History
      </button>

      <h3>Saved History:</h3>
      <div className="history-cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {getFilteredHistory().map((entry, index) => (
          <div key={index} className="history-card" onClick={() => loadHistory(entry)} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px', cursor: 'pointer' }}>
            <h4>{new Date(entry.date).toLocaleDateString()}</h4>
            <p><strong>Total Sales:</strong> ${entry.totalSales}</p>
            <p><strong>Total Profit:</strong> ${entry.totalProfit}</p>
            <p><strong>Time:</strong> {new Date(entry.timestamp).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryComponent;
