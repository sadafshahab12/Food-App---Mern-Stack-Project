import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Carousel = ({ carouselContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
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
  return (
    <div className="carousel relative h-screen overflow-hidden">
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
        <div className="absolute top-[60%] translate-y-[50%] bottom-35 left-1/2 transform -translate-x-1/2 bg-black opacity-60 text-white px-6 py-4 rounded-xl text-center max-w-xl w-[90%]">
          <h1 className="text-3xl text-white font-bold">
            {carouselContent[currentIndex].title}
          </h1>
          <p className="text-sm text-white leading-relaxed">
            {carouselContent[currentIndex].desc}
          </p>
        </div>
      </div>

      <button
        onClick={goToNext}
        className="absolute top-[50%] translate-y-[50%] bg-slate-300 h-10 w-10 rounded-full cursor-pointer p-2 right-2 z-10"
      >
        <IoChevronForward size={22} />
      </button>

      <div className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 p-1 bg-gray-200 rounded-full">
        {carouselContent.map((_, index) => (
          <span
            key={index}
            className={`w-8 h-3 rounded-full inline-block cursor-pointer 
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
