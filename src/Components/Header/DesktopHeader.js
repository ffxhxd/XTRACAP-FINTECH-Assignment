import React from "react";
import { Link } from "react-router-dom";
import { CiBeerMugFull } from "react-icons/ci";

const DesktopHeader = () => {
  return (
    <div className="flex items-center justify-between px-12 pt-6 pb-2">
      <Link to="/">
        <div className="flex gap-2 items-center justify-center">
          <CiBeerMugFull size={40} />
          <h1 className="font-bold text-3xl">XTRA</h1>
        </div>
      </Link>
      <div>
        <ul className="flex items-center font-bold gap-6 text-[#29233b] text-sm tracking-wider">
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/explore">EXPLORE</Link>
          </li>
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/favourites">FAVOURITES</Link>
          </li>
          <li className="hover:border-b border-black cursor-pointer">
            <Link to="/search">SEARCH</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopHeader;
