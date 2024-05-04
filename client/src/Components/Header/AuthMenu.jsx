import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
	return (
		<div className="flex z-50">
			<ul className="flex-col justify-center auth-menu hidden text-gray-700 absolute w-48 h-26 bg-white rounded-md shadow-lg">
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
			</ul>
		</div>
	);
}

export default AuthMenu;
