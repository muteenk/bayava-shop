import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loading from "../Elements/Loading";
import ErrorPanel from "../Elements/ErrorPanel";
import ProductCard from "../Elements/ProductCard";
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
        const response = await axios.get("/getProducts/family/Yoga", {cancelToken: cancelToken.token}); // Replace with your API endpoint
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

  const searchData = (data) => {

    let updatedData;
    if (filterParam === "Low") {
      updatedData = data.sort((a, b) => a.price__c - b.price__c);
    } else if (filterParam === "High") {
      updatedData = data.sort((a, b) => b.price__c - a.price__c);
    } else {
      updatedData = data;
    }

    return updatedData.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }


  return (
    <div className="mt-36">
      <div className="flex flex-col justify-center items-start mx-[4em] py-[4em]">
        <div className="flex justify-center items-center py-3 w-full">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium w-[30em] rounded-md py-[8px] px-6 border border-r-0 rounded-r-none border-midGray transition-all duration-300 ease-in-out"
          />
          <button className="bg-[white] hover:bg-softGray py-[10px] px-7 border border-l-0 border-midGray rounded-md rounded-l-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <select
          className="bg-[#ffffff] focus:outline-none font-crimson-pro text-lg font-medium w-[15em] rounded-md py-[12px] px-6 border border-midGray transition-all duration-300 ease-in-out my-5 text-solidGray"
          aria-label="Filter Countries By Region"
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Low">Price: low to high</option>
          <option value="High">Price: high to low</option>
        </select>
        {/* <span className="focus"></span> */}
      </div>

      <div className="flex flex-wrap justify-center items-center px-6">
        {products.length === 0 && error === null ? (
          <Loading />
        ) : error === null ? (
          searchData(products).map((product, index) => (
            <ProductCard key={index} data={product} />
          ))
        ) : (
          <ErrorPanel msg={"Oops! Failed to Get Products"} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
