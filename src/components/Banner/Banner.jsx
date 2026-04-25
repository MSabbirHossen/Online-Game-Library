import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden bg-gray-900">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Soft animated glow (reduced intensity) */}
      <motion.div
        animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -80, 80, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-3 sm:px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Heading */}
          <p className="text-sm sm:text-lg md:text-2xl font-bold text-gray-300 mb-3 sm:mb-4">
            Welcome to the
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
            <span className="text-cyan-400">Online Game Library</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10">
            Discover and support indie developers. Explore new worlds, trending
            games, and hidden gems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/explore"
              className="px-6 sm:px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Explore Games <FaArrowRight />
            </Link>

            <a
              href="#popular"
              className="px-6 sm:px-8 py-3 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition hover:scale-105 text-sm sm:text-base"
            >
              View Popular Games
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
