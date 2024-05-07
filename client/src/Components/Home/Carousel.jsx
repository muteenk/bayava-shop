import React, { useState } from 'react'

const Carousel = ({slides}) => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }


    const handleTransitionEnd = (e) => {
        if (current === slides.length - 1) {
            setCurrent(0);
        }
        else if (current === 0) {
            setCurrent(slides.length - 1);
        }
    }


  return (
    <div className="overflow-hidden h-[88vh] w-[90vw] relative bg-[#222222] z-0">
        <div className='flex relative transition-transform duration-500 ease-out' style={{transform: `translateX(-${current*100}%)`, zIndex:1}}>
            {
            slides.map((slide, index) => (
                <React.Fragment key={index}>
                    <img src={slide.img} className="w-[90vw] opacity-75" alt={slide.alt} />
                </React.Fragment>
            ))
            }   
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
            <button onClick={prevSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextSlide} className="rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
  )
}

export default Carousel