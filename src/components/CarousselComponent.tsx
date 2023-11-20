import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import trucks1 from '../images/trucks1.jpg';
import trucks2 from '../images/trucks2.jpg';
import trucks3 from '../images/trucks3.jpg';

const CarouselComponent = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', borderRadius: '20rem' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trucks1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trucks2}
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trucks3}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
