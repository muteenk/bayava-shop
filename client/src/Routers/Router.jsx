import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/about' element={<h1>About</h1>} /> */}
        </Routes>
    </div>
  )
}

export default Router