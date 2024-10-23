// src/components/FeedbackSection.js

import React from 'react';
import './FeedbackSection.css';

const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      <div className="feedback-header">
        <div className="guest-feedback">
          <h4>Guest Feedback</h4>
          <div className="feedback-score">
            <h2>4.8 <span>/5.0</span></h2>
            <span className="status">GREAT</span>
          </div>
        </div>
        <div className="complaint-resolution">
          <h4>Complain Resolution</h4>
          <div className="resolution-score">
            <h2>74 <span>/100</span></h2>
            <span className="resolution-status">GOOD</span>
          </div>
        </div>
      </div>

      <div className="feedback-slider">
        <div className="slider-track">
          <div className="slider-fill" style={{ width: '73%' }}>
            <span className="slider-label">AVG THIS PROP</span>
          </div>
        </div>
        <p>Canberra House is performing better than 73% of properties in this area by providing standout complain resolution and general experiences!</p>
        <a href="#">Learn how this is calculated</a>
      </div>
    </div>
  );
};

export default FeedbackSection;
