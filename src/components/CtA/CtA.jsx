import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-900 text-center">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Ready to <span className="text-cyan-400">Level Up</span>?
          </h2>

          {/* description */}
          <p className="text-gray-400 text-sm sm:text-lg md:text-xl mb-6 sm:mb-10">
            Join thousands of gamers exploring indie titles, trending releases,
            and hidden gems — all in one place.
          </p>

          {/* button */}
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-105 shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
          >
            Start Exploring <FaArrowRight />
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;