import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import GameCard from "../GameCard";
import { motion } from "framer-motion";
import { Link } from "react-router";
import gamesData from "../../data/games.json";

const PopularGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const sortedGames = [...gamesData].sort(
      (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
    );
    setGames(sortedGames.slice(0, 3));
  }, []);

  return (
    <section
      id="popular"
      className="relative py-20 overflow-hidden bg-gray-900"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Popular <span className="text-cyan-400">Games</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Discover the highest-rated games from our collection
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            View All Games <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
