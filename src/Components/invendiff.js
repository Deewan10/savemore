// InventoryComp.js
import React, { useState } from 'react';

function InventoryComp() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', cost: 50, rate: 75, quantity: 10, profit: 0, total: 0 },
    { id: 2, name: 'Item 2', cost: 100, rate: 150, quantity: 5, profit: 0, total: 0 },
  ]);

  // Calculate subtotal for total sales
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  // Calculate total profit
  const calculateTotalProfit = () => {
    return items.reduce((total, item) => total + item.profit, 0).toFixed(2);
  };

  // Handle input changes for each item
  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };

        if (['cost', 'rate', 'quantity'].includes(field)) {
          const cost = parseFloat(updatedItem.cost) || 0;
          const rate = parseFloat(updatedItem.rate) || 0;
          const quantity = parseInt(updatedItem.quantity, 10) || 0;
          updatedItem.profit = (rate - cost) * quantity; // Calculate profit
          updatedItem.total = rate * quantity;           // Calculate total sales
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

  return (
    <div>
      <h2>Inventory Manager</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderColor: '#5757ea' }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Cost</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Profit</th> {/* Profit column added here */}
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
                  value={item.cost}
                  onChange={(e) => handleInputChange(item.id, 'cost', e.target.value)}
                  placeholder="Cost"
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
              <td>{item.profit.toFixed(2)}</td> {/* Display calculated profit */}
              <td>{item.total.toFixed(2)}</td>  {/* Display calculated total */}
              <td>
                <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>
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

      <button onClick={addItem} style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#5757ea', color: 'white' }}>
        Add Item
      </button>
    </div>
  );
}

export default InventoryComp;
