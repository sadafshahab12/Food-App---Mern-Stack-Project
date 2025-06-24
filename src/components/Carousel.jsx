import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Carousel = ({ carouselContent, onSearch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  //auto slide in every 3 second
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % carouselContent.length
        );
        setAnimate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselContent.length]);

  //   navigation
  const goToPrevious = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const handleSearch = () => {
    onSearch(searchInput);
    setSearchInput("")
  };
  return (
    <div className="carousel relative h-[80vh] sm:h-screen overflow-hidden">
      <button
        onClick={goToPrevious}
        className="absolute top-[50%] translate-y-[50%] bg-slate-300 h-10 w-10 rounded-full cursor-pointer p-2 left-2 z-10"
      >
        <IoChevronBack size={22} />
      </button>

      <div className="flex justify-center h-full w-full relative">
        <img
          src={carouselContent[currentIndex].image}
          alt="carousel"
          className={`w-full h-[100vh] object-cover transform transition-all duration-500 ease-in-out 
            ${
              animate
                ? "opacity-0 scale-95 translate-x-2"
                : "opacity-100 scale-100 translate-x-0"
            }`}
        />
        <div className="absolute top-[60%] translate-y-[50%] bottom-45   left-1/2 transform -translate-x-1/2 bg-black opacity-60 text-white px-6 py-4 rounded-xl text-center max-w-xl w-[90%] sm:block hidden">
          <h1 className="text-3xl text-white font-bold">
            {carouselContent[currentIndex].title}
          </h1>
          <p className="text-sm text-white leading-relaxed">
            {carouselContent[currentIndex].desc}
          </p>
        </div>
        <div className="absolute top-[80%] sm:top-[90%] -translate-y-[50%] flex ">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              aria-label="Search"
              className="border border-white focus:ring-2 focus:ring-cyan-950  py-2 px-3 max-w-[600px] w-70 sm:w-143 rounded-lg bg-gray-200 outline-none transition duration-200 ease-in"
            />
            <IoIosSearch
              size={22}
              className="cursor-pointer absolute top-2.5 right-4 hover:scale-105 active:scale-95 "
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>

      <button
        onClick={goToNext}
        aria-label="Go to next slide"
        className="absolute top-[50%] translate-y-[50%] bg-slate-300 h-10 w-10 rounded-full cursor-pointer p-2 right-2 z-10"
      >
        <IoChevronForward size={22} />
      </button>

      <div className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 p-1 bg-gray-200 rounded-full">
        {carouselContent.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full inline-block cursor-pointer 
              ${
                index === currentIndex
                  ? "bg-slate-900  transition-all ease-in duration-150"
                  : "bg-gray-400"
              }`}
            onClick={() => {
              setAnimate(true);
              setTimeout(() => setAnimate(false), 500);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
