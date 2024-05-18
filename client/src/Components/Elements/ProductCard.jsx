import {lazy, Suspense} from "react";
import { Link } from "react-router-dom";
const ImageComponent = lazy(() => import("../Elements/ImageComponent"));

const ProductCard = ({data}) => {
  return (
    <div
      className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4"
    >
      <Link to={`/product/${data.id}`}>
        <Suspense
          fallback={
            <div className={`min-w-full h-[17em] rounded-md bg-softGray`}></div>
          }
        >
          <ImageComponent
            src={data.cover_photo__c}
            alt={data.name}
            className="min-w-full h-[17em] rounded-md"
          />
        </Suspense>
        <h1 className="text-[1.5em] font-bold">{data.name}</h1>
        <p className="text-[1.2em] font-medium">₹{data.price__c}</p>
      </Link>
      <Link
        to={"/"}
        className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;
