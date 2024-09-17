import React from 'react';
import Header from './Components/Header.js';
import Budget from './Components/Budget.js';
import Inventory from './Components/Inventory.js';

import './Style.css';

function App() {
    return (
      <div className="App">
        <Header />
        <Budget />
        <Inventory /> 
        
      </div>
    );
  }


export default App;