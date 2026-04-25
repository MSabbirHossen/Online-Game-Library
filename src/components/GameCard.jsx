import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-black/40 border border-gray-700/40 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <Link to={`/game/${game.id}`}>

        {/* Image */}
        <figure className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* category badge */}
          <div className="absolute top-3 right-3 bg-cyan-500/90 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {game.category}
          </div>

          {/* overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </figure>

        {/* Content */}
        <div className="p-3 sm:p-4">

          {/* title */}
          <h2 className="text-sm sm:text-lg font-bold text-white truncate group-hover:text-cyan-300 transition">
            {game.title}
          </h2>

          {/* description */}
          <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2">
            {game.description}
          </p>

          {/* rating + developer */}
          <div className="flex items-center justify-between mt-3 sm:mt-4 text-xs sm:text-sm gap-1">

            <div className="flex items-center gap-1 text-cyan-400">
              <FaStar size={14} />
              <span className="text-white font-semibold text-xs sm:text-sm">{game.ratings}</span>
            </div>

            <span className="text-gray-500 truncate text-xs">{game.developer}</span>
          </div>

          {/* button */}
          <div className="mt-3 sm:mt-4">
            <div className="w-full text-center px-3 sm:px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-[1.02] shadow-lg shadow-cyan-500/20 text-xs sm:text-sm">
              View Details
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;