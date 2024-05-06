import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
	return (
		<div className="absolute top-[2.2em] left-[-2em] bg-[white] w-[18em] px-3 py-3 rounded-md">

			<header>
				<h1 className="font-bold font-crimson-pro text-[20px]">
					Namaskaram
				</h1>
				<hr className="block text-[#f0ce39] border-[2px] rounded-lg " />
			</header>

			<main>
				<p className="font-light text-[13px] px-6 py-4">To access your account and manage orders</p>
				<div className="flex flex-col justify-center items-center">
					<Link className="text-[white] bg-bayavaOrange px-8 py-2 rounded-sm" >
						Sign Up
					</Link>
					<span className="font-semibold font-crimson-pro"> or </span>
					<Link className="text-bayavaOrange hover:underline">
						Login
					</Link>
				</div>
				<p className="font-light text-[13px] px-6 py-4">By Logging In/Signing up, I agree to the <Link className="text-bayavaOrange font-semibold hover:underline"> Terms of Use </Link> & <Link className="text-bayavaOrange font-semibold hover:underline"> Privacy Policy </Link></p>
			</main>

			{/* <ul className="flex-col justify-center auth-menu hidden text-gray-700 absolute w-48 h-26 bg-white rounded-md shadow-lg">
				<Link className="" to="/login">
					<li className="p-3 hover:bg-slate-500 hover:text-white rounded-t hover:cursor-pointer">
						Login
					</li>
				</Link>
				<Link to="/signup">
					<li className="p-3 hover:bg-slate-500 hover:text-white rounded-b hover:cursor-pointer">
						Signup
					</li>
				</Link>
			</ul> */}
		</div>
	);
}

export default AuthMenu;
