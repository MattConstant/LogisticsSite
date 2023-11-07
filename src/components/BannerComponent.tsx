import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageStyle = {
  width: 'auto',
backgroundImage: 'url(../images/truck.jpg)',
};

const Card = () => {
  return (
    <div className="image" style={imageStyle}>
        <img src='..images/truck.jpg' alt="Truck" width="500" height="333"></img>
        </div>
      );
};

export default Card;