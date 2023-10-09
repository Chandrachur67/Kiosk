import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><a href="/">Home</a></li>
      </ul>
      <ul className="navbar-right">
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  )
}

export default Navbar