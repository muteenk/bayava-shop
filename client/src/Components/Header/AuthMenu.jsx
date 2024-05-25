import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
  return (
    <div className="absolute top-[1.5em] left-[-14em] sm:left-[-10em] md:left-[-7em] z-50">
      <div className="mt-[1em] bg-[white] w-[18em] px-3 py-3 rounded-md">
        <header>
          <h1 className="font-bold font-crimson-pro text-[20px]">Namaskaram</h1>
          <hr className="block text-[#f0ce39] border-[2px] rounded-lg " />
        </header>

        <main>
          <p className="font-light text-[13px] px-6 py-4">
            To access your account and manage orders
          </p>
          <div className="flex flex-col justify-center items-center">
            <Link className="text-[white] bg-bayavaOrange px-8 py-2 rounded-sm">
              Sign Up
            </Link>
            <span className="font-semibold font-crimson-pro"> or </span>
            <Link className="text-bayavaOrange hover:underline">Login</Link>
          </div>
          <p className="font-light text-[13px] px-6 py-4">
            By Logging In/Signing up, I agree to the{" "}
            <Link className="text-bayavaOrange font-semibold hover:underline">
              {" "}
              Terms of Use{" "}
            </Link>{" "}
            &{" "}
            <Link className="text-bayavaOrange font-semibold hover:underline">
              {" "}
              Privacy Policy{" "}
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}

export default AuthMenu;
