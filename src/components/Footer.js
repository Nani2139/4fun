// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Add custom styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability Support</li>
            <li>Cancellation Options</li>
            <li>Report Neighbourhood Concern</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hosting</h4>
          <ul>
            <li>List your Property</li>
            <li>AirCover for Hosts</li>
            <li>Hosting Resources</li>
            <li>Community Forum</li>
            <li>Hosting Responsibly</li>
          </ul>
        </div>
        <div className="footer-column company-info">
          <div className="company-logo">
            <img src="/assets/logo.png" alt="Supernest.ai" /> {/* Replace with actual logo path */}
          </div>
          <p>
            Find your perfect thriving, lively place to call home. Browse hundreds of dorms, hostels, and rental properties ready to move in.
          </p>
          <p>
            <span>Email:</span> info@supernest.ai <br />
            <span>Phone:</span> +91 98765 43210
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 © Alra AI LLP · Privacy · Terms</p>
        <div className="footer-languages">
          <span>English (GB)</span>
          <span>GBP</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
