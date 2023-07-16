import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalItems = useSelector((state) => state.cart);
  const [searchValue, setSearchValue] = useState("");

  return (
    <nav className="bg-green-200 p-5">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <img src="./punch.png" alt="" className="w-1/4 rounded-2xl" />
          <span className="font-medium text-xl self-center whitespace-nowrap">
            3Brother'sYourOrder
          </span>
        </div>

        <div className="flex items-center space-x-2 md:space-x-8">
          <div>
            <Link
              to="/"
              className="self-center text-xl font-normal whitespace-nowrap"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="self-center text-xl font-normal whitespace-nowrap"
            >
              New Products
            </Link>
          </div>
          <div>
            <Link
              to="/cart"
              className="self-center text-xl font-normal whitespace-nowrap"
            >
              Cart {totalItems.length}
            </Link>
          </div>
          <div className="flex gap-1">
            <input
              type="search"
              placeholder="Search Products..."
              className="h-12 w-48 md:w-72 rounded-xl px-3"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="bg-black text-white w-20 h-12 rounded-xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
