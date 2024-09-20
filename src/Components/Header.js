import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className='logo'>
          <h1>Save<span>More</span></h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes style={{ color: 'red' }} /> : <FaBars style={{ color: 'blue' }} />}
        </div>

        <div className={`arc ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><a href="#goals">Goals</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
