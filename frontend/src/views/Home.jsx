import Carousel from "../components/Carousel";
import { carouselContent } from "../data/CarouselData";
import FoodData from "../components/FoodData";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Food App";
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Carousel carouselContent={carouselContent} onSearch={setSearchTerm} />
      <FoodData searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
