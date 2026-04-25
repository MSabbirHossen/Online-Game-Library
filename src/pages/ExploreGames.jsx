import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import gamesData from "../data/games.json";
import { FaSearch, FaFilter } from "react-icons/fa";

const ExploreGames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(gamesData.map((game) => game.category)),
  ];

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-dark py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore All Games
          </h1>
          <p className="text-gray-400 text-lg">
            Discover hundreds of amazing indie games from talented developers
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="input-group w-full">
            <span className="bg-primary text-dark">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search games, developers..."
              className="input input-bordered w-full bg-base-200 text-white border-gray-600 focus:border-primary focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="text-primary" />
            <h3 className="text-xl font-bold text-white">Categories</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm transition-all ${
                  selectedCategory === category
                    ? "btn-primary text-white"
                    : "btn-outline border-primary text-primary hover:bg-primary hover:text-dark"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-primary font-bold">
              {filteredGames.length}
            </span>{" "}
            game
            {filteredGames.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGames.map((game) => (
              <motion.div key={game.id} variants={item}>
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-gray-400 mb-4">No games found</p>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="btn btn-primary text-white"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExploreGames;
