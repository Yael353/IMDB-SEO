import React from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full min-h-[60px] h-auto py-2 bg-white bottom-0 mt-10">
      <div className="max-w-[90rem] mx-auto px-4 2xl:px-0">
        <Link to="/">
          <SiThemoviedatabase size={40} />
        </Link>
        <p className="text-center pt-4">© {currentYear} YaRe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
