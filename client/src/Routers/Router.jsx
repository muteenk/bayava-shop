import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import ProductsPage from '../Components/YogaStore/YogaProducts.jsx'
import ProductDisplay from '../Components/YogaStore/ProductDisplay'
import AyurvedaStore from '../Components/AyurvedaStore/AyurvedaProducts.jsx'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Footer from '../Components/Footer/Footer'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/yoga-store' element={<ProductsPage />} />
            <Route path='/product/:id' element={<ProductDisplay />} />
            <Route path='/ayurveda-store' element={<AyurvedaStore />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Router