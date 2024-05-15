import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loading from "../Elements/Loading";
// import ImageComponent from "../Elements/ImageComponent";

const ImageComponent = lazy(() => import("../Elements/ImageComponent"));

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [dependency, setDependency] = useState(0);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParam, setFilterParam] = useState("All");

  const fetchProductList = useMemo(
    () => async () => {
      try {
        const cancelToken = axios.CancelToken.source();
        const response = await axios.get("/getProducts", {cancelToken: cancelToken.token}); // Replace with your API endpoint
        setProducts(response.data.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled");
        }
        else {
          setError(error);
        }
      }

      return () => {
        cancelToken.cancel();
      }
    },
    []
  );

  useEffect(() => {
    fetchProductList();
  }, []);


  const search = (data) => {
    return data.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }


  return (
    <div className="mt-36">
      <div className="flex justify-between items-center mx-[13em] py-[4em]">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium w-[30em] rounded-md py-[8px] px-6 border border-r-0 rounded-r-none border-midGray transition-all duration-300 ease-in-out"
          />
          <button className="bg-[white] hover:bg-softGray py-[10px] px-7 border border-l-0 border-midGray rounded-md rounded-l-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <select
          // onChange={(e) => {
          // setFilterParam(e.target.value);
          // }}
          className="bg-[#ffffff] focus:outline-none font-crimson-pro text-lg font-medium w-[15em] rounded-md py-[12px] px-6 border border-midGray transition-all duration-300 ease-in-out ml-4 text-solidGray"
          aria-label="Filter Countries By Region"
        >
          <option value="All">All</option>
          <option value="Africa">Price: low to high</option>
          <option value="Americas">Price: high to low</option>
        </select>
        {/* <span className="focus"></span> */}
      </div>

      <div className="flex flex-wrap justify-center items-center px-6">
        {products.length === 0 && error === null ? (
          <Loading />
        ) : error === null ? (
          search(products).map((product, index) => (
            <div
              className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4"
              key={index}
            >
              <Link to={"/"}>
                <Suspense
                  fallback={
                    <div
                      className={`min-w-full h-[17em] rounded-md bg-softGray`}
                    ></div>
                  }
                >
                  <ImageComponent
                    src={product.cover_photo__c}
                    alt={product.name}
                    className="min-w-full h-[17em] rounded-md"
                  />
                </Suspense>
              </Link>
              <Link to={"/"}>
                <h1 className="text-[1.5em] font-bold">{product.name}</h1>
                <p className="text-[1.2em] font-medium">₹{product.price__c}</p>
              </Link>
              <Link
                to={"/"}
                className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md"
              >
                Add to Cart
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-center text-[2em] font-bold text-red-500 border border-bayavaOrange px-9 py-4 rounded-md my-20">
              Oops! Failed to fetch products
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
