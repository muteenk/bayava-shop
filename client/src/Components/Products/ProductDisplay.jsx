import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageComponent from "../Elements/ImageComponent";
import Loading from "../Elements/Loading";
import ErrorPanel from "../Elements/ErrorDisplay";

const ProductDisplay = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

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
            <h1>{product && product.name}</h1>
            <p>{product && product.category__c}</p>
            <p>{product && product.sub_category__c}</p>
            <p>{product && product.family__c}</p>
            <p>{product && product.product_description__c}</p>
            <p>{product && product.product_details__c}</p>
            <p>{product && product.product_tag_line__c}</p>
            <p>{product && product.price__c}</p>
          </div>
        </div>
      ) : (
        <ErrorPanel msg={error.message} />
      )}
    </div>
  );
};

export default ProductDisplay;
