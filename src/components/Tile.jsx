import React from "react";
import "../App.css"; // Make sure CSS is imported

const Tile = ({ value }) => {
  return (
    <div className={`tile tile-${value}`}>
      {value !== 0 ? value : ""}
    </div>
  );
};

export default Tile;

