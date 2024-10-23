// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // You will create this file for styling
import { FaSearch } from 'react-icons/fa'; // For the search icon
import profilePic from '../assets/profilepic.png'; // Assuming you have a profile picture in assets folder

function Navbar() {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/assets/logo.png"
              alt="Supernest Logo"
              width="40"
              height="40"
            />
            <span className="brand-text">supernest.ai</span>
          </a>
        </div>

        {/* Location with Search Icon */}
        <div className="navbar-location">
          <button className="location-button">
            Guntur <FaSearch className="search-icon" />
          </button>
        </div>

        {/* Nest Your Property Button and Profile */}
        <div className="navbar-right">
          <button className="btn btn-primary property-button">
            Nest Your Property
          </button>
          <img
            src={profilePic}
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
