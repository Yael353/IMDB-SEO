import React from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="bg-slate-50 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
