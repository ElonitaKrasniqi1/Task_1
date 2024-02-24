import React from "react";

export default function Card({ version, buttonText, author, image, downloadBtn, buttonStyle, cardText }) {
  return (
    <div className="card">
      <div className="card-header">
        <span>{version}</span>
      </div>
      <div className="card-body">
        <div className="img-container">
          <img className="round-image" src={image} alt="Author" />
        </div>
        <div className="text-container">
          <button
            style={buttonStyle}
            className="new-button"
          >
            {buttonText}
          </button>
          <p className="KevinJoe">{author}</p>
          <p className="text-c">{cardText}</p>
          <button className="download-button">
            {downloadBtn}
          </button>
          </div>
      </div>
    </div>
  );
}
