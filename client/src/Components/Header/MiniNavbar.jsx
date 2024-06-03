import { Link } from "react-router-dom";
import { YogaMegaMenu, AyurvedaMegaMenu } from "./MegaMenu";

function MiniNavbar() {
  return (
    <>
      <div className="flex justify-center items-center md:hidden bg-smokeBrown py-3 w-full">
        <form
          action=""
          className="flex justify-center items-center mx-auto w-full"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium rounded-md py-[8px] w-[70%] px-6 border border-r-0 rounded-r-none border-midGray transition-all duration-300 ease-in-out"
          />
          <button className="bg-[white] hover:bg-softGray py-[10px] w-[20%] px-7 border border-l-0 border-midGray rounded-md rounded-l-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="hidden md:flex w-full items-center justify-between h-10 bg-slate-200 shadow-lg">
        <ul className="flex items-center justify-between w-full md:px-60 lg:px-80 bg-smokeBrown py-2">
          <li className="group relative text-[white] font-light">
            <Link
              to="/yoga-store"
              className="peer group-hover:text-hoverOverBrown"
            >
              Yoga Store
            </Link>
            <div className="hidden hover:block peer-hover:block transition-all duration-500">
              <YogaMegaMenu />
            </div>
          </li>
          <li className="group relative text-[white] font-light">
            <Link
              to="/ayurveda-store"
              className="peer group-hover:text-hoverOverBrown"
            >
              Ayurveda Store
            </Link>
            <div className="hidden hover:block peer-hover:block transition-all duration-500">
              <AyurvedaMegaMenu />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MiniNavbar;
