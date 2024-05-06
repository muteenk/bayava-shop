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
		<div className="fixed top-0 left-0 z-100 w-full h-20">
			<nav className="w-full py-[10px] px-[6em] flex items-center justify-around bg-[#eeeeee] drop-shadow-lg">
				<div>
					<form
						action=""
						className="flex items-center"
					>
						<input
							type="text"
							placeholder="Search"
							className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium w-70 rounded-md py-[8px] px-6 border border-r-0 rounded-r-none border-smokeBrown transition-all duration-300 ease-in-out"
						/>
						<button className="py-[10px] px-7 border border-l-0 border-smokeBrown rounded-md rounded-l-none">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
				<div>
					<Link to="/" className="flex justify-center items-center text-3xl font-bold font-crimson">
						<img src={Logo} className="h-[2em]" alt="" />
						Bayava Shop <span className="text-[16px] mx-2"><i class="fa-solid fa-bag-shopping"></i></span>
					</Link>
				</div>
				<div></div>
				<div className="flex items-center justify-between gap-5">
					<ul className="flex items-center justify-between">
						<li className="auth inline-block relative items-center justify-between mx-4 font-crimson-pro text-xl font-medium">
							<button className="text-lg font-semibold inline-flex items-center" onClick={toggleAuthMenu}>
								<i class="fa-solid fa-user"></i>
							</button>
							{
								authMenu ? <AuthMenu /> : null
							}
						</li>
						<li className="mx-4">
							<Link to="/cart" className="text-lg font-semibold">
								<i class="fa-solid fa-heart"></i>
							</Link>
						</li>
						<li className="mx-4">
							<Link to="/cart" className="text-lg font-semibold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
								</svg>
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
