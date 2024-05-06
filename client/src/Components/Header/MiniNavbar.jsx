import React from 'react'
import { Link } from 'react-router-dom'

function MiniNavbar() {
  return (
    <div className='w-full flex items-center justify-between h-10 bg-slate-200 shadow-lg'>
        <ul className='flex items-center justify-between w-full px-80 bg-smokeBrown py-2'>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/yoga-store">Yoga Store</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Rudraksha</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Ayurveda Store</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Temple & Consecrated</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Natural Food</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Health & Immunity</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Clothing</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Body Care</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Home Decor</Link>
            </li>
            <li className='text-[white] font-light hover:text-hoverOverBrown'>
                <Link to="/ayurveda-store">Books</Link>
            </li>
        </ul>
    </div>
  )
}

export default MiniNavbar