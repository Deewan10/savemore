import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation data for easier management
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/invoice", label: "Invoice Generator" },
    { path: "/budget", label: "Budget" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        {/* Logo */}
        <div className='logo'>
          <h1><Link to="/">Save<span>More</span></Link></h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="nav-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="desktop-buttons">
          <Link to="/login" className="login-btn">Sign In</Link>
          <Link to="/get-started" className="primary-btn">Get Started</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={24} className="hamburger-icon" />
          ) : (
            <FaBars size={24} className="hamburger-icon" />
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav">
            {navLinks.map((link, index) => (
              <li key={index} className="mobile-nav-item">
                <Link 
                  to={link.path} 
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Buttons */}
            <div className="mobile-buttons">
              <Link 
                to="/login" 
                className="mobile-login-btn"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link 
                to="/get-started" 
                className="mobile-primary-btn"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;