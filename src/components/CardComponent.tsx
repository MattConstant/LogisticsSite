import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyle = {
  width: '18rem',
  marginLeft: 'auto', // these two lines center the card horizontally
  marginRight: 'auto'
};

const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;