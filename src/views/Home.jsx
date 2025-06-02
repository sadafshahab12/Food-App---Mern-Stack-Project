import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { carouselContent } from "../data/CarouselData";

const Home = () => {

  return (
    <div>
      <Carousel carouselContent={carouselContent} />
      <Card />
    </div>
  );
};

export default Home;
