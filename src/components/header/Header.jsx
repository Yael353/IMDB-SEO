import React from "react";
import Navbar from "./Navbar";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row w-full h-[60px] bg-black/90 text-white">
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
