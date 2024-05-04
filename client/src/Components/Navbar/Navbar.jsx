import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <nav className='bg-darkBrown flex px-7 py-4'>
            <Link to="/" className='text-[white]'>Bayava Store</Link>
        </nav>

    </div>
  )
}

export default Navbar