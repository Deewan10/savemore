import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

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

        
        <div className={`arc ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#budget">Home</a></li>
            <li><a href="#pocket">Pocket</a></li>
            <li><a href="#goals">Goals</a></li>
            {/* <li><a href="#login">Log In/Sign Up</a></li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
