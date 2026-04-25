import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import GameCard from "../GameCard";
import { motion } from "framer-motion";
import { Link } from "react-router";
import gamesData from "../../data/games.json";

const PopularGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Sort games by rating
    const sortedGames = [...gamesData].sort(
      (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
    );
    setGames(sortedGames.slice(0, 3));
  }, []);

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-5xl font-bold text-black mb-4">
              Popular Games
            </h2>
            <p className="text-gray-600 text-lg">
              Check out the top-rated games from our collection
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {games.map((game) => (
              <motion.div key={game.id} variants={item}>
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="btn btn-primary btn-lg text-white hover:scale-105 transition"
            >
              View All Games <FaArrowRight />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PopularGames;
