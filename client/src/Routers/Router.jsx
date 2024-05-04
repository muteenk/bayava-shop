import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import YogaStore from '../Components/YogaStore/YogaStore'
import AyurvedaStore from '../Components/AyurvedaStore/AyurvedaStore'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='yoga-store' element={<YogaStore />} />
            <Route path='ayurveda-store' element={<AyurvedaStore />} />
        </Routes>
    </div>
  )
}

export default Router