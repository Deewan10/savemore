import React from 'react';
import Header from './Components/Header.js';
import Budget from './Components/Budget.js';


import './Style.css';

function App() {
    return (
      <div className="App">
        <Header />
        <Budget />
        {/* <Pocket /> */}
        
      </div>
    );
  }


export default App;