import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Carousel from "./Carousel"
import {CarouselData, ProductCardSliderData} from "./HomeData"
import ImageCard from "../Elements/ImageCard"
import JumboCardSlider from "../Elements/JumboCardSlider"
import Categories from "./Categories"
import CardSection from "../Elements/CardSection"

import Loading from "../Elements/Loading"
import ImageComponent from "../Elements/ImageComponent"

function Home() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [dependency, setDependency] = useState(0);

  const fetchProductList = useMemo(() => async () => {
    try {
      const response = await axios.get('/getProducts'); // Replace with your API endpoint
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  }, [dependency]);

  const fetchCategoies = useMemo(() => async () => {
    try {
      const response = await axios.get('/getCategories'); // Replace with your API endpoint
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }, [dependency]);



  useEffect(() => {
    fetchCategoies();
    fetchProductList();
	}, []);

  return (
    <div className="overflow-x-hidden">

      {/* Hero Carousel Section */}
      <div className="bg-gradient-to-b from-softGray to-[white] w-screen mx-auto mt-28">
        <div className="flex justify-center items-center w-full mx-auto">
          <Carousel slides={CarouselData} />
        </div>
      </div>

      {/* Category Cards */}
      <div className="relative top-[-6em] flex justify-center items-center gap-3">
        <ImageCard imgSrc="https://images.unsplash.com/photo-1661915606983-cc9759b99343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVkcmFrc2h8ZW58MHwwfDB8fHww">
          <h1 className="text-4xl text-[white]">Rudraksh</h1>
        </ImageCard>
        <ImageCard imgSrc="https://plus.unsplash.com/premium_photo-1675053533678-615611ecc0b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <h1 className="text-4xl text-[white]">Offerings</h1>
        </ImageCard>
        <ImageCard imgSrc="https://images.unsplash.com/photo-1495298975657-492a1d068595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5hdHVyYWwlMjBGb29kc3xlbnwwfDB8MHx8fDA%3D">
          <h1 className="text-4xl text-[white]">Natural Foods</h1>
        </ImageCard>
        <ImageCard imgSrc="https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <h1 className="text-4xl text-[white]">Healthy and Immunity</h1>
        </ImageCard>
      </div>

      {/* Product Card Slider */}
      <div className="relative pb-[3em] bg-[url('https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover"> 
        <div className="absolute h-full w-full bg-[#0000009d] z-0"></div>
        <h1 className="relative text-[white] font-crimson font-bold text-[4em] text-center z-10 py-[1em]">Gifts of Grace</h1>
        <div className="relative flex justify-center items-center w-[60vw] mx-auto z-10">
            <JumboCardSlider>
              {ProductCardSliderData.map((product, index) => (
                <div className="relatve flex bg-[#ffffff] min-w-full h-[30em]" key={index}>
                  <div className={`absolute top-0 left-[${index*100}%] min-w-full h-full`}>
                    <img src={product.img} alt={product.alt} className="h-full w-full" />
                  </div>
                  <div className={`absolute top-0 right-[${index*100}%] w-full h-full flex flex-col justify-end items-end bg-gradient-to-l from-[black] to-[#00000038] px-[2em]`}>
                    <h1 className="text-right text-bayavaOrange text-[2em] font-semibold">{product.title}</h1>
                    <p className="text-right text-[white] w-[60%] text-[14px] py-[1em]">{product.desc}</p>
                    <h2 className="text-right text-[white]"><del className="font-medium text-solidGray">₹{product.price}</del><span className="mx-3 font-bold text-[20px]">₹{product.price - product.discount}</span></h2>
                    <Link to={product.link} className="text-[white] bg-bayavaOrange hover:bg-hoverOverBrown px-8 py-2 rounded-md my-5">Check Out</Link>
                  </div>
                </div>
              ))}
            </JumboCardSlider>
        </div>
      </div>


      {/* New Arrivals Section */}
      <CardSection title="New Arrivals" viewAll="/products">
          {(products.length === 0) ? <Loading /> : 
            products.reverse().splice(0, 4).map((product, index) => (
              <div className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4" key={index}>
                  <Link to={"/"}>
                    <ImageComponent src={product.cover_photo__c} alt={product.name} className="w-full h-[17em] rounded-md" />
                  </Link>
                  <Link to={"/"} >
                    <h1 className="text-[1.5em] font-bold">{product.name}</h1>
                    <p className="text-[1.2em] font-medium">₹{product.price__c}</p>
                  </Link>
                  <Link to={"/"} className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md">Add to Cart</Link>
              </div>
            ))
          }
      </CardSection>


      {/* Categories */}
      {
        (categories.length === 0) ? <Loading /> : <Categories categories={categories}/>
      }
      


      {/* Limited Stock */}
      <CardSection title="Limited Stock" viewAll="/products">
          {(products.length === 0) ? <Loading /> : 
            products.splice(0, 4).map((product, index) => (
              <div className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4" key={index}>
                  <Link to={"/"}>
                    <ImageComponent src={product.cover_photo__c} alt={product.name} className="w-full h-[17em] rounded-md" />
                  </Link>
                  <Link to={"/"} >
                    <h1 className="text-[1.5em] font-bold">{product.name}</h1>
                    <p className="text-[1.2em] font-medium">₹{product.price__c}</p>
                  </Link>
                  <Link to={"/"} className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md">Add to Cart</Link>
              </div>
            ))
          }
      </CardSection>

    </div>
  )
}

export default Home