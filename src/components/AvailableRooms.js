import React from 'react';
import Slider from 'react-slick';
import './AvailableRooms.css';

// Import images
import room1 from '../assets/room1.jpg'; // Replace with actual images

const roomsData = [
  {
    id: 1,
    image: room1,
    title: 'Quadruple Premier Room',
    price: '₹21,934/month',
    oldPrice: '₹31,952/month',
    securityDeposit: '₹15,000 Security Deposit',
    availability: 'Available',
    recommended: true,
    topRated: true,
    type: 'Unisex, Quadruple',
    services: ['AC', 'Attached Washroom', 'High Speed Wifi', 'Laundry Service', 'Storage Shelf', '+ 3 more'],
  },
  {
    id: 2,
    image: room1,
    title: 'Single Premier Room',
    price: '₹42,109/month',
    oldPrice: '₹45,234/month',
    securityDeposit: '₹30,000 Security Deposit',
    availability: 'Available',
    recommended: false,
    topRated: true,
    type: 'Unisex, Single',
    services: ['AC', 'Attached Washroom', 'High Speed Wifi', 'Laundry Service', 'Storage Shelf', '+ 3 more'],
  },
  {
    id: 3,
    image: room1,
    title: 'Dorm Room',
    price: '₹12,109/month',
    oldPrice: '₹25,234/month',
    securityDeposit: '₹5,000 Security Deposit',
    availability: 'Not Available',
    recommended: false,
    topRated: false,
    type: 'Unisex, 8-Person Dorm',
    services: ['AC', 'Attached Washroom', 'High Speed Wifi', 'Laundry Service', 'Storage Shelf', '+ 3 more'],
  },
];

const AvailableRooms = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="available-rooms">
      <h3>Available Rooms</h3>
      <Slider {...settings}>
        {roomsData.map((room) => (
          <div key={room.id} className={`room-card ${room.availability === 'Not Available' ? 'not-available' : ''}`}>
            <div className="room-image">
              <img src={room.image} alt={room.title} />
              {room.recommended && <span className="badge recommended">RECOMMENDED</span>}
              {room.availability === 'Available' ? (
                <span className="badge available">Available</span>
              ) : (
                <span className="badge not-available">Not Available</span>
              )}
              {room.topRated && <span className="badge top-rated">Top Rated</span>}
            </div>
            <div className="room-details">
              <h4>{room.title}</h4>
              <p className="room-price">
                <span className="current-price">{room.price}</span>{' '}
                <span className="old-price">{room.oldPrice}</span>
              </p>
              <p className="security-deposit">{room.securityDeposit}</p>
              <p className="room-type">{room.type}</p>
              <div className="room-services">
                {room.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AvailableRooms;
