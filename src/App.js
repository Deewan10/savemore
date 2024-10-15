import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Budget from './Components/Budget';
import Invoice from './Components/Invoice'; // Make sure this is the correct path
import InventoryComponent from './Components/InventoryComponent'; // Import InventoryComponent

import './Style.css';

function App() {
  const [showInventory, setShowInventory] = useState(false);

  const toggleComponent = () => {
    setShowInventory(!showInventory);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <button onClick={toggleComponent} style={{ margin: '10px', padding: '10px' }}>
          {showInventory ? 'Switch to Invoice' : 'Switch to Inventory'}
        </button>

        {/* Conditional rendering based on the button toggle */}
        <Routes>
          <Route path="/" element={<Budget />} />
          <Route path="/invoice" element={showInventory ? <InventoryComponent /> : <Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
