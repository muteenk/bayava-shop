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
    <div className="overflow-hidden h-[88vh] w-screen relative bg-[#222222] z-0">
        <div className='flex relative transition-transform duration-500 ease-out' style={{transform: `translateX(-${current*100}%)`, zIndex:1}}>
            {
            slides.map((slide, index) => (
                <React.Fragment key={index}>
                    <img src={slide.img} className=" object-fill opacity-50" alt={slide.alt} />
                    {
                        (index === current) ? <>
                            <h1 className='fixed top-[11.5em] w-[30%] animate-fadeUp text-[#ff8a2b] font-crimson-pro font-bold text-[2em]'  style={{left: `${current*100+10}%`}}>{slide.subTitle}</h1>
                            <h1 className='fixed top-[5em] w-[30%] animate-fadeUp font-crimson font-bold text-[5em] text-[white] drop-shadow-lg' style={{left: `${current*100+10}%`}}>{slide.title}</h1>
                        </> : null
                    }
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