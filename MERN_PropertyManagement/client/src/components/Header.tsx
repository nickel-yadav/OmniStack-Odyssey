import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black shadow-sm">
      <div className="flex justify-between items-center py-3 px-2 sm:px-4">
        <Link to="/">
          <h1 className="font-bold text-white text-sm sm:text-lg flex flex-wrap">
            <span>UrbanScape</span>
            <span>Realty</span>
          </h1>
        </Link>
        <form className="bg-white rounded-md p-3 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaArrowRightLong />
        </form>
        <ul className="flex gap-4 text-white items-center">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <button className="bg-blue-900 py-1 px-2 rounded-md hover:bg-blue-600">
              Sign in
            </button>
          </Link>
        </ul>
      </div>
    </header>
  );
}
