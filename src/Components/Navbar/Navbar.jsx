import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <ul className="navbar-left-ul">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-ul">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar