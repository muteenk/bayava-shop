import React from 'react'
import { Link } from 'react-router-dom'

function MiniNavbar() {
  return (
    <>
    <div className='flex justify-center items-center md:hidden bg-smokeBrown py-3 w-full'>
          <form
            action=""
            className="flex justify-center items-center mx-auto w-full"
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium rounded-md py-[8px] w-[70%] px-6 border border-r-0 rounded-r-none border-midGray transition-all duration-300 ease-in-out"
            />
            <button className="bg-[white] hover:bg-softGray py-[10px] w-[20%] px-7 border border-l-0 border-midGray rounded-md rounded-l-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
					</form>
    </div>
    <div className='hidden md:flex w-full items-center justify-between h-10 bg-slate-200 shadow-lg'>
        <ul className='flex items-center justify-between w-full md:px-60 lg:px-80 bg-smokeBrown py-2'>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/products">Yoga Store</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Ayurveda Store</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default MiniNavbar