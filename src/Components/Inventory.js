import React, { useState } from 'react';

function Inventory() {
  // State to store items in the inventory
  const [items, setItems] = useState([
    { id: 1, name: '', rate: 0, quantity: 0, total: 0 }
  ]);

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
          const quantity = parseInt(updatedItem.quantity) || 0;
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
      total: 0
    };
    setItems([...items, newItem]);
  };

  // Remove an item from the inventory
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className='inventory'>
      <h2>Inventory Calculator</h2>
      <div className='tab'>
        <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse', borderColor: '#5757ea' }}>
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
                <td>
                    {item.total.toFixed(2)}
                </td>
                <td>
                    <button className='btn' onClick={() => removeItem(item.id)}  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', paddingLeft: '5px' }}>
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
      
      
    </div>
  );
}

export default Inventory;
