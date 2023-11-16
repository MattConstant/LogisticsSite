import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyle = {
  width: '18rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxShadow: '0 16px 18px 0 rgba(0,0,0,0.2)',
  cursor: 'pointer', // Change cursor on hover
  transition: 'transform 0.3s', // Smooth transition for hover effect
};

// Added `linkUrl` prop
const Card = ({ title, text, imageUrl, linkUrl }) => {
  return (
    // Wrap the card in an anchor tag to make it clickable
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card" style={cardStyle} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Enlarge card on hover
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Return to original size when not hovered
      >
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
