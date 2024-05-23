import React from 'react'
import { Link } from 'react-router-dom'

function MiniNavbar() {
  return (
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
  )
}

export default MiniNavbar