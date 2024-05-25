import React, { useEffect, useState } from 'react'

const Carousel = ({slides}) => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }, 5000)
        return () => clearInterval(interval)})


  return (
    <div className="overflow-hidden h-[77vh] sm:h-[88vh] w-full relative z-0">
        <div className='flex relative transition-transform duration-500 ease-out' style={{transform: `translateX(-${current*100}%)`, zIndex:1}}>
            {
            slides.map((slide, index) => (
                <div key={index} className={`relative min-w-[100vw] h-[88vh]`} style={{background: `url('${slide.img}')`, backgroundPosition: 'center', backgroundSize: "cover"}}>
                    <div className="absolute h-full w-full bg-[#00000083] z-0"></div>
                    {
                        (index === current) ? <>
                            <h1 className='absolute lg:top-[7.5em] lg:left-[10%] md:top-[10em] md:left-[15%] sm:top-[10em] sm:left-[15%] top-[11em] left-[12%] w-[30%] animate-fadeUp text-[#ff8a2b] font-crimson-pro font-bold lg:text-[2em] sm:text-[1.5em] text-[1.2em] z-15'>{slide.subTitle}</h1>
                            <h1 className='absolute lg:top-[4.5em] lg:left-[10%] md:top-[4.5em] md:left-[15%] sm:top-[4.5em] sm:left-[15%] top-[6em] left-[12%] w-[90%] animate-fadeUp font-crimson font-bold lg:text-[4em] sm:text-[4em] text-[2.5em] text-[white] drop-shadow-lg z-10'>{slide.title}</h1>
                        </> : null
                    }
                </div>
            ))
            }   
        </div>
        <div className="absolute inset-0 flex justify-end items-center sm:justify-between mt-[11em] sm:mt-0 p-6 z-10">
            <button onClick={prevSlide} className="hidden sm:inline rounded-full bg-[white] font-bold text-[22px] px-[16px] py-[6px] hover:bg-softGray shadow-lg">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextSlide} className="rounded-full bg-[white] font-bold text-[28px] sm:text-[22px] sm:px-[16px] px-[19px] py-[6px] hover:bg-softGray shadow-lg">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
  )
}

export default Carousel