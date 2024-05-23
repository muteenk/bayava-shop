import React, { useEffect } from "react";

const Sidebar = ({ trigger, setTrigger }) => {
  const toggleSidebar = () => {
    setTrigger((prev) => !prev);
    document.body.style.overflowY = "scroll";
  };

  const setHeight = () => {
    document.getElementById("sidebar").style.minHeight = window.innerHeight + "px";
  };

  useEffect(() => {
  

  // define mobile screen size:

  let deviceWidth = window.matchMedia("(max-width: 1024px)");

  if (deviceWidth.matches) {
    // set an event listener that detects when innerHeight changes:

    window.addEventListener("resize", setHeight);

    // call the function once to set initial height:

    setHeight();
  }}, []);

  return (
    <>
      {trigger ? (
        <div className="fixed top-0 left-0 z-40 bg-[black] w-screen min-h-[150vh] opacity-45 blur-lg"></div>
      ) : null}

      <div
        id="sidebar"
        className={`fixed top-0 z-50 bg-[white] max-h-screen min-h-screen w-[65%] sm:w-[50%] md:w-[40%] lg:hidden shadow-2xl transition-all duration-500 ${
          trigger ? "left-0" : "left-[-65%]"
        } !overflow-y-scroll`}
      >
        <div className="px-3 py-3">
          <button className="text-3xl text-[#494949]" onClick={toggleSidebar}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        Sidebar
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
