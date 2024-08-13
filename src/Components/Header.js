import React from 'react';



function Header() {
  return (
    <header>
      <nav>
        <div className='logo'><h1>Save<span>More</span></h1>
        </div>
        <div className='arc'>
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
