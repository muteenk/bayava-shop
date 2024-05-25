import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageComponent from "../Elements/ImageComponent";
import Loading from "../Elements/Loading";
import ErrorPanel from "../Elements/ErrorPanel";

const ProductDisplay = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  const getSingleProduct = async (id) => {
    try {
      const cancelToken = axios.CancelToken.source();
      const res = await axios.get(`/getProduct/${id}`, {
        cancelToken: cancelToken.token,
      });
      setProduct(res.data.data[0]);
      console.log(res.data.data[0]);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled");
      } else {
        setError(error);
      }
    }

    return () => {
      cancelToken.cancel();
    };
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <div className="relative mt-[10em] mb-7 w-full">
      {product === null && error === null ? (
        <Loading />
      ) : error === null ? (
        <div className="flex">
          <div className="w-[20%] mx-10">
            <ImageComponent
              src={product.cover_photo__c}
              alt={product.name}
              className="rounded-sm"
            />
          </div>
          <div className="w-[60%]">
            <h1 className="font-crimson text-[3em] font-bold">{product && product.name}</h1>
            <p className="py-1 text-[#4e4e4e] font-crimson-pro">{product && product.product_tag_line__c}</p>
            <div className="flex mt-[1em]">
              <p className="mx-2 font-semibold">{product && product.category__c}</p> |
              <p className="mx-2 font-semibold">{product && product.sub_category__c}</p>
            </div>
            <p className="mx-2 font-crimson-pro font-bold text-[20px] text-bayavaOrange">{product && product.family__c}</p>
            <p className="text-[2em] px-2 py-5 font-semibold">₹ {product && product.price__c}</p>
            <div className="flex items-center">
              <p className="text-[20px] text-solidGray">Quantity :</p>
              <div className="mx-6">
                <button className="text-[black] hover:bg-softGray px-3 py-2 rounded-full" onClick={() => {setCount(count+1)}}><i class="fa-solid fa-plus"></i></button>
                <span className="px-3 py-2 font-bold text-[1.5em]">{count}</span>
                <button className="text-[black] hover:bg-softGray px-3 py-2 rounded-full" onClick={
                  () => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }
                }><i class="fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div className="my-6">
              <button className="bg-bayavaOrange text-[#fff] px-5 py-2 rounded-md">Add to Cart</button>
              <button className="bg-[#fff] text-bayavaOrange px-5 py-2 rounded-md shadow-lg border-[1px] border-bayavaOrange mx-5">Buy Now</button>
            </div>
            <div className="bg-[#eecda3] shadow-xl px-5 py-7 my-6">
              <h2  className="font-crimson text-[2em] font-bold">Product Details</h2>
              <p className="">{product && product.product_details__c}</p>
            </div>
            <div className="shadow-xl px-5 py-7 my-6">
              <h2  className="font-crimson text-[2em] font-bold">Product Description</h2>
              <p className="">{product && product.product_description__c}</p>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPanel msg={error.message} />
      )}
    </div>
  );
};

export default ProductDisplay;
