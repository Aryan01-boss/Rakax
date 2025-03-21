import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${scrollPosition > 100 ? 'footer-shadow' : ''}`}>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <h2>RAKAX</h2>
            <p className="tagline">Your Amazing Tagline Here</p>
          </div>
          
          <div className="footer-navigation">
            <div className="footer-links">
              <h3>Navigation</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-expand" onClick={() => setIsExpanded(!isExpanded)}>
          <div className={`chevron ${isExpanded ? 'chevron-up' : 'chevron-down'}`}></div>
        </div>
        
        <div className={`footer-extended ${isExpanded ? 'expanded' : ''}`}>
          <div className="footer-extended-content">
            <div className="footer-contact">
              <h3>Contact Us</h3>
             
              <p>Email: ofheartvibes@gmail.com</p>
              <p>Phone: +918209911670</p>
            </div>
            
            <div className="footer-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} RakaX. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;