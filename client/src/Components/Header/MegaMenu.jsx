import {useState, useEffect, useMemo} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const YogaMegaMenu = () => {

  const [categories, setCategories] = useState([]);
  const [dependency, setDependency] = useState(0);

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
	}, []);

  return (
    <div className="absolute top-0 left-[-10em]">
      <div className=" bg-smokeYellow text-[black] w-[80vw] h-[24em] px-32 py-4 mt-10">
        <div className="flex justify-start items-start flex-wrap">
          {
            categories.map((category, index) => (
              <Link to={"/product/category/"+category.category__c} key={index} className="block w-32 mx-10 my-6 font-semibold hover:text-hoverOverBrown">{category.category__c}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export const AyurvedaMegaMenu = () => {
  return (
    <div className="absolute top-0 left-[-60vw]">
      <div className=" bg-smokeYellow text-[black] w-[80vw] h-[24em] px-32 py-4 mt-10">
        <div className="flex justify-start items-start flex-wrap">
          Ayurveda
        </div>
      </div>
    </div>
  )
};
