import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './Components/Header.js';
import Budget from './Components/Budget.js';
import Invoice from './Components/Invoice.js';

import './Style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define routes for each component */}
        <Routes>
          <Route path="/" element={<Budget />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
