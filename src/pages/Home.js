import React from "react";
import Card from "../components/CardComponent.tsx";
import CarouselComponent from "../components/CarousselComponent.tsx";
import { FooterComponent } from "../components/FooterComponent.tsx";

const Home = () => {
  return (
    <>
    <style> 
    {`
    h1 { padding-top: 2%; text-align: center; }

    `}
    </style>
    <div>
      <CarouselComponent/>
      <h1>Our Services</h1>
      <h3> Lorem ipsum dolor sit amet, consectetur adipicing elit</h3>
      <div className="container mt-8">
      <div className="row">
      <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://media.perenews.com/uploads/2023/02/Logistics-Theme-image-800x800-1.jpg"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://media.licdn.com/dms/image/D4D22AQGzgmxZ53b01w/feedshare-shrink_800/0/1697813427472?e=2147483647&v=beta&t=PXOzgS4FjUHIOI-0_-L5wOuPZq9W6ZWLQwunBIP0rlQ"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://www.metropolitanlogistics.ca/wp-content/uploads/elementor/thumbs/Busy-Port-pqnjbf2g97g71fjffp23vyyy02insb305inaq58e9s.jpg"
        />
        </div>
        </div>
      </div>
    </div>    
    <FooterComponent/>
    </>
  );
};

export default Home;
