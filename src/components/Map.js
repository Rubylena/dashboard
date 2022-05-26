import React from "react";
import map from "../images/map.jpeg";

const Map = () => {
  return (
      <div className="map-container">
        <h2>By Country</h2>
        <img className="map-img" src={map} alt="world map"></img>
      </div>
  );
};

export default Map;
