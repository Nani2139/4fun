// src/components/ReviewSection.js

import React from 'react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    username: 'You',
    comment: 'nah man never go kaze. japanese bullshit filled with rich spoiled people. mirage is waaaayyyyy better imo',
    roomType: 'Quadruple Premier Room',
    timestamp: '32s ago',
    rating: 4.2,
  },
  {
    id: 2,
    username: '@dontcontactme',
    comment: 'nah man never go kaze. japanese bullshit filled with rich spoiled people. mirage is waaaayyyyy better imo',
    roomType: 'Single Premier Room',
    timestamp: '2d ago',
    rating: 4.7,
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h3>Reviews</h3>
      <div className="comments">
        {reviews.map((review) => (
          <div key={review.id} className="comment">
            <div className="comment-header">
              <div className="avatar"></div>
              <div className="comment-info">
                <h4>{review.username}</h4>
                <span>{review.roomType}</span>
              </div>
              <div className="rating">
                <span>{review.rating}/5.0</span>
              </div>
            </div>
            <p>{review.comment}</p>
            <div className="timestamp">{review.timestamp}</div>
          </div>
        ))}
      </div>
      <button className="load-more-btn">Load More</button>
      <div className="comment-box">
        <input type="text" placeholder="Write a comment..." />
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default ReviewSection;
