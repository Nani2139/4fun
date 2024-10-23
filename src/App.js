import React from 'react';
import Navbar from './components/Navbar';
import ButtonMenu from './components/ButtonMenu';
import PropertyCard from './components/PropertyCard';
import image1 from './assets/property-image.jpg';
import image2 from './assets/hotel2.jpg';
import image3 from './assets/property-image.jpg';
import Locality from './components/Locality';

function App() {
  const propertyImages = [
    image1, // Use the imported images
    image2,
    image3,
  ];
  return (
    <div>
      <Navbar />
      <ButtonMenu />
      <PropertyCard images={propertyImages}/>
      <Locality />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
