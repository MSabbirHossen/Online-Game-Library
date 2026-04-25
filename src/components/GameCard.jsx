import React from "react";
import { Link } from "react-router";
import { FaStar, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card bg-base-200 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-primary transition-all duration-300"
    >
      <Link to={`/game/${game.id}`}>
        <figure className="relative overflow-hidden h-48">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-primary px-3 py-1 rounded-full text-white text-sm font-bold">
            {game.category}
          </div>
        </figure>

        <div className="card-body p-4">
          <h2 className="card-title text-black text-lg truncate">
            {game.title}
          </h2>

          <p className="text-gray-600 text-sm line-clamp-2">
            {game.description}
          </p>

          <div className="flex items-center justify-between my-2">
            <div className="flex items-center gap-1 text-accent">
              <FaStar />
              <span className="text-black font-bold">{game.ratings}</span>
            </div>
            <span className="text-gray-600 text-xs">{game.developer}</span>
          </div>

          <div className="card-actions justify-end gap-2">
            <span className="btn btn-primary btn-sm text-white w-full">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
