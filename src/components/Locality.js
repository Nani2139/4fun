import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faChurch, faSubway, faPlane } from '@fortawesome/free-solid-svg-icons';
import './Locality.css';

const mapStyles = {
  height: "300px",
  width: "100%",
  borderRadius: "10px",
};

const defaultCenter = {
  lat: 17.385044,
  lng: 78.486671,
};

function Locality() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="locality-container">
      <div className="locality-left">
        <h3>Locality</h3>
        <LoadScript
          googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
          onLoad={() => setMapLoaded(true)}
          onError={() => setMapLoaded(false)}
        >
          {mapLoaded ? (
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          ) : (
            <div className="map-loading">Loading...</div>
          )}
        </LoadScript>

        {/* View on Maps button positioned at top right */}
        <button className="view-map-btn">View on Maps</button>
      </div>

      <div className="locality-right">
        <div className="landmarks">
          <h4>Landmarks Nearby</h4>
          <ul>
            <li><FontAwesomeIcon icon={faBus} /> Narsingi Bus Stand - 2.1 km</li>
            <li><FontAwesomeIcon icon={faChurch} /> St. Paul Cathedral - 3.2 km</li>
            <li><FontAwesomeIcon icon={faSubway} /> Teacher’s Colony Metro Station - 4.1 km</li>
            <li><FontAwesomeIcon icon={faPlane} /> Guntur International Airport - 5.2 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Locality;
