import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("/getProducts")
      .then((res) => {
        setCards(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center px-6">
        {
          cards.map((product, index) => (
          <div className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4" key={index}>
              <Link to={"/"}>
                <img src={product.cover_photo__c} alt={product.name} className="w-full h-[17em] rounded-md" />
              </Link>
              <Link to={"/"} >
                <h1 className="text-[1.5em] font-bold">{product.name}</h1>
                <p className="text-[1.2em] font-medium">₹{product.price__c}</p>
              </Link>
              <Link to={"/"} className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md">Add to Cart</Link>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductsPage;
