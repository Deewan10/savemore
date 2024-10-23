import React, { useState } from 'react';
import Invoice from './Invoice'; 
import InventoryComponent from './InventoryComponent'; 

function Inventory() {
  const [activeComponent, setActiveComponent] = useState('invoice');

  const toggleComponent = () => {
    setActiveComponent(prev => (prev === 'invoice' ? 'inventory' : 'invoice'));
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <button onClick={toggleComponent}>
        Switch to {activeComponent === 'invoice' ? 'Inventory' : 'Invoice'}
      </button>

      {activeComponent === 'invoice' ? <Invoice /> : <InventoryComponent />}
    </div>
  );
}

export default Inventory;
