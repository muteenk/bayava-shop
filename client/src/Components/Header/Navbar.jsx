import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniNavbar from "./MiniNavbar";
import AuthMenu from "./AuthMenu";
import Logo from "../../assets/Logo.png";

function Navbar() {
	
	const [authMenu, setAuthMenu] = useState(false);

	const toggleAuthMenu = () => {
		setAuthMenu(!authMenu);
	}

	
	return (
		<div className="fixed top-0 left-0 z-40 w-full">
			<nav className="w-full py-[10px] lg:px-[4em] flex items-center justify-between md:justify-around bg-softGray drop-shadow-lg">
				<div className="hidden lg:block">
					<form
						action=""
						className="flex items-center"
					>
						<input
							type="text"
							placeholder="Search"
							className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium w-70 rounded-md py-[8px] px-6 border border-r-0 rounded-r-none border-midGray transition-all duration-300 ease-in-out"
						/>
						<button className="bg-[white] hover:bg-softGray py-[10px] px-7 border border-l-0 border-midGray rounded-md rounded-l-none">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
				<div className="flex items-center">
					<div className="mx-5 sm:mx-8">
						<button className="block lg:hidden">
							<i className="fa-solid fa-bars text-lg sm:text-2xl"></i>
						</button>
					</div>
					<Link to="/" className="flex justify-center items-center sm:text-3xl text-[22px] font-bold font-crimson">
						<img src={Logo} className="h-[2em] mx-2 sm:mx-3" alt="" />
						Bayava Shop <span className="hidden sm:inline text-[16px] mx-2"><i className="fa-solid fa-bag-shopping"></i></span>
					</Link>
				</div>
				<div></div>
				<div className="flex items-center justify-between gap-5">
					<ul className="flex items-center justify-between">
						<li className="relative mx-2 sm:mx-4 z-50">
							<button className="peer text-[16px] sm:text-lg font-semibold items-center" onMouseEnter={toggleAuthMenu} onMouseLeave={toggleAuthMenu}>
								<i className="fa-solid fa-user text-[#494949]"></i>
							</button>
							<div className="hidden peer-hover:block hover:block">
								<AuthMenu />
							</div>
						</li>
						<li className="hidden sm:inline mx-4">
							<Link to="/cart" className="text-lg font-semibold">
								<i className="fa-solid fa-heart text-[#494949]"></i>
							</Link>
						</li>
						<li className="mx-4">
							<Link to="/cart" className=" text-[16px] sm:text-lg font-semibold">
								<i className="fa-solid fa-cart-shopping text-[#494949]"></i>
							</Link>
						</li>
						
					</ul>
				</div>
			</nav>
			<MiniNavbar />
		</div>
	);
}

export default Navbar;
