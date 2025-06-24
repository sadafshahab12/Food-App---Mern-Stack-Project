import Carousel from "../components/Carousel";
import { carouselContent } from "../data/CarouselData";
import FoodData from "../components/FoodData";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Carousel carouselContent={carouselContent} onSearch={setSearchTerm} />
      <FoodData searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
