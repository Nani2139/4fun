// src/components/Locality.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faChurch, faSubway, faPlane } from '@fortawesome/free-solid-svg-icons';
import './Locality.css';

const mapStyles = {        
  height: "300px",
  width: "100%"
};

const defaultCenter = {
  lat: 17.385044, // Example latitude
  lng: 78.486671 // Example longitude
};

function Locality() {
  return (
    <div className="locality-container">
      <div className="locality-left">
        <h3>Locality</h3>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
        <button className="view-map-btn">View on Maps</button>
      </div>

      <div className="locality-right">
        <div className="landmarks">
          <h4>Landmarks Nearby</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faBus} /> Narsingi Bus Stand - 2.1 km
            </li>
            <li>
              <FontAwesomeIcon icon={faChurch} /> St. Paul Cathedral - 3.2 km
            </li>
            <li>
              <FontAwesomeIcon icon={faSubway} /> Teacher’s Colony Metro Station - 4.1 km
            </li>
            <li>
              <FontAwesomeIcon icon={faPlane} /> Guntur International Airport - 5.2 km
            </li>
          </ul>
        </div>

        <div className="peer-group">
          <h4>Peer Group</h4>
          <p className="percentage">42.5%</p>
          <div className="slider">
            <div className="slider-track">
              <div className="slider-fill" style={{ width: '42.5%' }}></div>
            </div>
            <p>Every 1 in 3 people at Canberra House have the same goals as you!</p>
            <a href="#">Learn how this is calculated</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locality;
