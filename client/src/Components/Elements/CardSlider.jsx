import { useState } from "react";

const CardSlider = ({ children: slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current === slides.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrent((current === 0 ? slides.length - 1 : current - 1))
  }

  return (
    <>
      <div className="overflow-hidden w-[86%] relative z-0 shadow-2xl">
        <div className='flex relative transition-transform duration-500 ease-out' style={{transform: `translateX(-${current*100}%)`}}>
          {slides}
        </div>
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full flex items-center justify-between p-4 z-10">
        <button onClick={prevSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
            <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
            <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="absolute bottom-[-1.5em] flex">
        {
          slides.map((slide, index) => (
            <div className={`h-2 w-2 rounded-full mx-2 ${(current === index) ? "bg-bayavaOrange" : "bg-[white]"}`} key={index}></div>
          ))
        }
      </div>
    </>
  );
};

export default CardSlider;
