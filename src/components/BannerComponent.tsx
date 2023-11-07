import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageStyle = {
  width: '100%',
backgroundImage: 'url(../images/truck.jpg)'
};

const Card = () => {
  return (
    <div className="image" style={imageStyle}>
        <img src='..images/truck.jpg' alt="Truck" width="100%" height="20%"></img>
        </div>
      );
};

export default Card;