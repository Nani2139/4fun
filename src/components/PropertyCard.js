import React, { useState } from 'react';
import './PropertyCard.css';
import { FaStar, FaHeart, FaShareAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PropertyCard({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="property-card">
      {/* Left Section with Image and Carousel */}
      <div className="property-image-section">
        <img
          src={images[currentImageIndex]}
          alt="Canberra House"
          className="property-image"
        />

        {/* Carousel Buttons */}
        {images.length > 1 && (
          <>
            <button className="carousel-button left" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="carousel-button right" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Badges */}
        <div className="property-badges">
          <span className="badge badge-match">
            <FaStar /> 95% match
          </span>
          <span className="badge badge-top-rated">Top Rated</span>
        </div>
        <div className="property-type">
          <span>Unisex</span>
          <span>Single, Double, Triple</span>
        </div>
      </div>

      {/* Right Section with Details */}
      <div className="property-details-section">
        <div className="property-header">
          <h3 className="property-title">Canberra House</h3>
          <p className="property-location">Narsingi</p>
          <div className="property-actions">
            <FaShareAlt className="action-icon" />
            <FaHeart className="action-icon" />
          </div>
        </div>
        <div className="property-pricing">
          <p className="current-price">₹42,109/month</p>
          <p className="original-price">₹45,234/month</p>
        </div>
        <div className="property-services">
          <h5>Services</h5>
          <div className="service-tags">
            <span className="service-tag">AC</span>
            <span className="service-tag">Attached Washroom</span>
            <span className="service-tag">High Speed Wifi</span>
            <span className="service-tag">Laundry Service</span>
            <span className="service-tag">Storage Shelf</span>
            <span className="service-tag">+ 3 more</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="property-actions-buttons">
          <button className="callback-button">Request Callback</button>
          <button className="visit-button">Visit Property</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
