import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Budget from './Components/Budget';
import Invoice from './Components/Invoice'; 
import InventoryComponent from './Components/InventoryComponent';

import './Style.css';

function App() {
  const location = useLocation(); // Hook to get the current path
  const [showInventory, setShowInventory] = useState(location.pathname === '/invoice' ? false : true); // Set initial state based on current path

  const showInvoice = () => {
    setShowInventory(false); // Switch to Invoice component
  };

  const showInventoryComponent = () => {
    setShowInventory(true); // Switch to Inventory component
  };

  return (
    <div className="App">
      <Header />

      {location.pathname === '/invoice' && (
        <div className='swtch' style={{ display: 'flex', gap: '1px', margin: '20px', marginTop: '40px' }}>
          <button 
            onClick={showInvoice} 
            style={{
              padding: '10px 20px',
              backgroundColor: showInventory ? '#f0f0f0' : '#5757ea',
              color: showInventory ? 'black' : 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px'
            }}
          >
            Invoice
          </button>
          <button 
            onClick={showInventoryComponent} 
            style={{
              padding: '10px 20px',
              backgroundColor: showInventory ? '#5757ea' : '#f0f0f0',
              color: showInventory ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px'
            }}
          >
            Inventory
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/invoice" element={showInventory ? <InventoryComponent /> : <Invoice />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
