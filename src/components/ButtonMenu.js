import React from 'react';
import './ButtonMenu.css'; // We'll create this CSS file to style the menu

function ButtonMenu() {
  return (
    <div className="button-menu-container">
      <div className="menu-buttons">
        <button className="menu-button">Caves</button>
        <button className="menu-button">Cabins</button>
        <button className="menu-button">Amazing views</button>
        <button className="menu-button">Top cities</button>
        <button className="menu-button">Luxe</button>
        <button className="menu-button">Containers</button>
        <button className="menu-button">Trending</button>
        <button className="menu-button">New</button>
        <button className="menu-button">Historical homes</button>
        <button className="menu-button">Earth homes</button>
        <button className="menu-button">Boats</button>
      </div>
      <div className="action-buttons">
        <button className="show-map-button">Show map</button>
        <button className="filter-button">Filters</button>
      </div>
    </div>
  );
}

export default ButtonMenu;
