import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down - hide navbar
      setIsVisible(false);
    } else {
      // Scrolling up - show navbar
      setIsVisible(true);
    }
    // Remember current scroll position
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? '' : 'navbar--hidden'}`}>
      <h1 className="logo">My Website</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      <button className="cta">contect</button>
    </nav>
  );
};

export default Navbar;