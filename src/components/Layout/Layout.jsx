import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900 overflow-hidden">

      {/* Global cyber background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* neon glow layers */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px]"></div>

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* floating energy line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>

      {/* Navbar (always above background) */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1">
        <Outlet key={location.pathname} />
      </main>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;