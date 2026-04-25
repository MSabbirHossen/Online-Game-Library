import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaHome, FaGamepad } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Animated 404 */}
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-9xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Oops! It seems like this page doesn't exist. Maybe you took a wrong
            turn in the gaming world?
          </p>
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mb-12"
        >
          <FaGamepad className="text-6xl text-primary mx-auto" />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="btn btn-primary btn-lg text-white hover:scale-105 transition flex items-center gap-2"
          >
            <FaHome />
            Go Home
          </Link>
          <Link
            to="/explore"
            className="btn btn-outline btn-lg border-accent text-accent hover:bg-accent hover:text-dark flex items-center gap-2"
          >
            <FaGamepad />
            Explore Games
          </Link>
        </motion.div>

        {/* Extra Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-12"
        >
          Error Code: 404 | Lost in the Game Library
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;
