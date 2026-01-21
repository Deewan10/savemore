// components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">SteadyGrowth</span>
            <p className="footer-tagline">
              Making investing simple, safe, and accessible for everyone
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Product</h4>
              <a href="#how-it-works" className="link">How It Works</a>
              <a href="#funds" className="link">Funds</a>
              <a href="#pricing" className="link">Pricing</a>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Learn</h4>
              <a href="#blog" className="link">Blog</a>
              <a href="#guides" className="link">Guides</a>
              <a href="#faq" className="link">FAQs</a>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Company</h4>
              <a href="#about" className="link">About Us</a>
              <a href="#careers" className="link">Careers</a>
              <a href="#contact" className="link">Contact</a>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Legal</h4>
              <a href="#privacy" className="link">Privacy Policy</a>
              <a href="#terms" className="link">Terms of Service</a>
              <a href="#disclosures" className="link">Disclosures</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="disclaimer">
            Investments carry risk. Returns are not guaranteed. The value of your investment may go down as well as up. Please read all fund information carefully before investing.
          </p>
          
          <div className="copyright">
            <p>© {new Date().getFullYear()} SteadyGrowth. All rights reserved.</p>
            <div className="regulatory">
              <span>Regulated by financial authorities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;