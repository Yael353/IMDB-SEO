import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-black text-red-600">
      <div className="max-w-[90rem] mx-auto flex flex-col ">
        <div className="relative">
          <div className="h-screen">
            <img
              className="w-auto h-full mx-auto"
              src="/img/chucky.jpg"
              alt="chucky was here"
            />
          </div>
          <div className="absolute inset-0 flex top-10 justify-center">
            <div className="text-center flex flex-col">
              <i
                className="text-[20px] tracking-wider"
                style={{ textShadow: "0.5px 0.5px white" }}
              >
                Nothing to see here..{" "}
              </i>
              <Link className="underline text-white pt-4" to="/">
                Go back home{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
