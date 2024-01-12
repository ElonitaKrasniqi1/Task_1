import React from "react";

export default function ImageSection({ image, title, text }) {
  return (
    <div className="image-container">
      <div className="image-section">
        <img src={image} alt={title} className="image" />
        <div className="text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

