import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ trigger, setTrigger }) => {
  const toggleSidebar = () => {
    setTrigger((prev) => !prev);
    document.body.style.overflowY = "scroll";
  };

  const setHeight = () => {
    document.getElementById("sidebar").style.minHeight =
      window.innerHeight + "px";
  };

  useEffect(() => {
    // define mobile screen size:

    let deviceWidth = window.matchMedia("(max-width: 1024px)");

    if (deviceWidth.matches) {
      // set an event listener that detects when innerHeight changes:

      window.addEventListener("resize", setHeight);

      // call the function once to set initial height:

      setHeight();
    }
  }, []);

  return (
    <>
      {trigger ? (
        <div className="fixed top-0 left-0 z-40 bg-[black] w-screen min-h-[150vh] opacity-45 blur-lg"></div>
      ) : null}

      <div
        id="sidebar"
        className={`fixed top-0 z-50 bg-[white] max-h-screen min-h-screen w-[75%] sm:w-[50%] md:w-[40%] lg:hidden shadow-2xl transition-all duration-500 ${
          trigger ? "left-0" : "left-[-75%]"
        } !overflow-y-scroll`}
      >
        <div className="px-5 py-3">
          <div className="flex justify-between items-center">
            <button className="text-2xl text-[#494949] hover:text-bayavaOrange" onClick={toggleSidebar}>
              <i className="fa-solid fa-times"></i>
            </button>
            <header>
              <h1 className="font-bold font-crimson-pro text-[20px]">Hello, User !</h1>              
            </header>
          </div>

          <div className="bg-[white] w-full px-1 py-3 rounded-md"><main>
              <p className="font-light text-[13px] px-6 py-4 text-center">
                To access your account and manage orders
              </p>
              <div className="flex flex-col justify-center items-center">
                <Link className="text-[white] bg-bayavaOrange px-8 py-2 rounded-sm">
                  Sign Up
                </Link>
                <span className="font-semibold font-crimson-pro"> or </span>
                <Link className="text-bayavaOrange hover:underline">Login</Link>
              </div>
            </main>
          </div>

          <hr className="block text-[#f0ce39] border-[2px] rounded-lg " />
        </div>

        <ul className="w-full">
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Home</Link>
          </li>
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/yoga-store" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Yoga Store</Link>
          </li>
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/ayurveda-store" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Ayurveda Store</Link>
          </li>
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Your Cart</Link>
          </li>
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Your Wishlist</Link>
          </li>
          <li className="w-full">
            <Link onClick={toggleSidebar} to="/" className="block w-full px-4 py-3 hover:bg-softGray hover:text-bayavaOrange font-crimson-pro text-[18px] font-medium">Your Account</Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Sidebar;
