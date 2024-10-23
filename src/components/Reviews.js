import React from 'react';
import ReviewSection from './ReviewSection';
import FeedbackSection from './FeedbackSection';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-container">
      <ReviewSection />
      <FeedbackSection />
    </div>
  );
};

export default Reviews;
