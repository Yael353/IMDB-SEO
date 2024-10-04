import React from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col bg-black/90 2xl:bg-black min-h-screen h-auto">
      <Header />
      <main className="flex-1 bg-black/90 pt-[60px] pb-10 max-w-[90rem] mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
