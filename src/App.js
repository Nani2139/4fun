import React from 'react';
import Navbar from './components/Navbar';
import ButtonMenu from './components/ButtonMenu';
import PropertyCard from './components/PropertyCard';
import image1 from './assets/property-image.jpg';
import image2 from './assets/hotel2.jpg';
import image3 from './assets/property-image.jpg';
import Locality from './components/Locality';
import AvailableRooms from './components/AvailableRooms';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


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
      <AvailableRooms />
      <Reviews />
      <Footer />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
