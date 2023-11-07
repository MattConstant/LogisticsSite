import React from "react";
import Card from "../components/CardComponent.tsx";
import CarouselComponent from "../components/CarousselComponent.tsx";
import BannerComponent from "../components/BannerComponent.tsx";

const Home = () => {
  return (
    <div>
      <BannerComponent/>
      <CarouselComponent/>
      <h1>Our Services</h1>
      <div className="container mt-8">
      <div className="row">
      <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://via.placeholder.com/150"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://via.placeholder.com/150"
        />
        </div>
        <div className="col-sm">
        <Card
          title="Card Title"
          text="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl="https://via.placeholder.com/150"
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
