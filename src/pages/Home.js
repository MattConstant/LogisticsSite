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
      <h3>Explore our suite of bespoke logistics solutions designed for seamless, secure, and efficient delivery from the first mile to the last.</h3>
      <div className="container mt-8">
      <div className="row">
      <div className="col-sm">
        <Card
          title="Road Transport Services"
          text="Efficient road transport is key to your logistics needs. Our modern fleet is ready to deliver
          your goods safely and on time. With advanced tracking systems, we ensure transparency and up-to-date information on your shipment’s journey."
          imageUrl="https://organicboosting.bio/wp-content/uploads/2017/09/International-Logistics-650x650.jpg"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Air Freight Services"
          text="When time is of the essence, our air freight services offer the quickest way to get your products to 
          market. We handle all the details, from expedited boarding to customs clearance, providing a swift and seamless service."
          imageUrl="https://organicboosting.bio/wp-content/uploads/2017/09/Logisitics-Satisfaction-650x650.jpg"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Marine Shipping Solutions"
          text=" Our marine shipping solutions connect continents, offering a cost-effective way to transport large quantities of goods.
           With a range of vessels and containers, we adapt to your specific sea freight requirements."
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
