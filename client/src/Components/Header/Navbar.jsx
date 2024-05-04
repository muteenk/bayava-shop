import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniNavbar from "./MiniNavbar";
import AuthMenu from "./AuthMenu";

function Navbar() {
	
	const [authMenu, setAuthMenu] = useState(false);

	const toggleAuthMenu = () => {
		setAuthMenu(!authMenu);
	}

	
	return (
		<div className="fixed top-0 left-0 z-100 w-full h-20">
			<nav className="w-full h-20 flex items-center justify-between px-40 bg-slate-100 drop-shadow-lg">
				<div>
					<form
						action=""
						className="flex items-center"
					>
						<input
							type="text"
							placeholder="Search"
							className="bg-slate-200 focus:outline-none font-crimson-pro text-lg font-medium w-60 h-10 rounded-lg px-3 py-2 border rounded-r-none border-gray-300 focus:border-slate-500 transition-all duration-300 ease-in-out"
						/>
						<button className="h-10 px-3 border border-gray-300 rounded-lg rounded-l-none hover:bg-slate-200 active:bg-slate-700 active:text-slate-50 active:border-gray-50">
							<svg
								width="24"
								height="24"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</form>
				</div>
				<div>
					<h1 className="text-3xl font-bold">
						<Link to="/">Bayava Shop</Link>
					</h1>
				</div>
				<div></div>
				<div className="flex items-center justify-between gap-5">
					<ul className="flex items-center justify-between gap-5">
						<li>
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
						<li className="auth inline-block relative items-center justify-between gap-5 font-crimson-pro text-xl font-medium">
							<button className="text-lg font-semibold inline-flex items-center" onClick={toggleAuthMenu}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
							{
								authMenu ? <AuthMenu /> : null
							}
						</li>
					</ul>
				</div>
			</nav>
			<MiniNavbar />
		</div>
	);
}

export default Navbar;
