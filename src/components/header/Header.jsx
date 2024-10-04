import React from "react";
import Navbar from "./Navbar";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex border-b-[1px] border-black/50 flex-row w-full h-[60px] bg-white shadow-lg shadow-yellow-50/60 text-black fixed z-[999]">
      <div className="max-w-[90rem] w-full flex mx-auto justify-between px-4 2xl:px-0 items-center">
        <div>
          <Link to="/">
            <SiThemoviedatabase size={40} />
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
