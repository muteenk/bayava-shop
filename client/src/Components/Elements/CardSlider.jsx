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
      <div className="overflow-hidden w-[85%] relative z-0">
        <div className='flex relative transition-transform duration-500 ease-out' style={{transform: `translateX(-${current*100}%)`}}>
          {slides}
        </div>
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full flex items-center justify-between p-4 z-10">
        <button onClick={prevSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default CardSlider;