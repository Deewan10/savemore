import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className='logo'>
          <h1> < Link to="/">Save<span>More</span> </Link> </h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes style={{ color: 'red', }} /> : <FaBars style={{ color: 'blue' }} />}
        </div>

        <div className={`arc ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/budget">Budget</Link></li>
            <li><Link to="/invoice">Inventory</Link></li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
