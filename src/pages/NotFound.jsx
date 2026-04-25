import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaHome, FaGamepad, FaSkull } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden px-4">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-2xl"
      >

        {/* icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-6"
        >
          <FaSkull className="text-cyan-400 text-6xl mx-auto drop-shadow-lg" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        >
          404
        </motion.h1>

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lost in the <span className="text-cyan-400">Game Grid</span>
        </h2>

        {/* description */}
        <p className="text-gray-400 text-lg mb-10">
          The page you are looking for doesn’t exist or has been moved into the
          digital void.
        </p>

        {/* buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition flex items-center justify-center gap-2"
          >
            <FaHome /> Return Home
          </Link>

          <Link
            to="/explore"
            className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center justify-center gap-2"
          >
            <FaGamepad /> Explore Games
          </Link>
        </div>

        {/* footer note */}
        <p className="text-gray-500 text-sm mt-12">
          Error Code: 404 • Neural Link Lost
        </p>

      </motion.div>
    </section>
  );
};

export default NotFound;