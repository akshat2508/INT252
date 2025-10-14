import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>React_demo</h2>
      <div className="nav-links">
        <a href="https://github.com/akshat2508" target="_blank" >GitHub</a>
        <a href="https://www.linkedin.com/in/akshat-paul/" target="_blank" >LinkedIn</a>
        <a href="https://www.instagram.com/__akshat25/" target="_blank" >Instagram</a>
      </div>
    </nav>
  )
}

export default Navbar;
