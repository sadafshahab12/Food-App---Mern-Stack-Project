import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { carouselContent } from "../data/CarouselData";

const Home = () => {
  return (
    <div>
      <Carousel carouselContent={carouselContent} />
      <div className="my-10 px-10 grid   grid-cols-4 gap-5 justify-self-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
