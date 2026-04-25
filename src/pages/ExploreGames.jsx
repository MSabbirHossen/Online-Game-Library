import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import gamesData from "../data/games.json";
import { FaSearch, FaFilter } from "react-icons/fa";

const ExploreGames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(gamesData.map((g) => g.category))];

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || game.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gray-900">
      <title>Explore Games - GameHub</title>

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Explore{" "}
            <span className="text-cyan-400">Games</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Discover trending indie games and AAA titles in one place
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center bg-black/40 border border-gray-700 rounded-lg overflow-hidden backdrop-blur-md">
            <span className="px-4 text-cyan-400">
              <FaSearch />
            </span>

            <input
              type="text"
              placeholder="Search games, developers..."
              className="w-full py-3 px-2 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Categories</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition text-sm font-semibold ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black border-cyan-400"
                    : "bg-black/30 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <div className="mb-6 text-gray-400">
          Showing{" "}
          <span className="text-cyan-400 font-bold">
            {filteredGames.length}
          </span>{" "}
          games
        </div>

        {/* Grid */}
        {filteredGames.length > 0 ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-3">No games found</p>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreGames;