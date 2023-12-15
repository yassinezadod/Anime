// MangaCard.js
import React from 'react';

const MangaCard = ({ title, imageSrc, description }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img width="200px" height="200px" src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};



export default MangaCard;
