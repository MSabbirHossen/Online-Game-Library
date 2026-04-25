import React from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import gamesData from "../data/games.json";
import {
  FaStar,
  FaDownload,
  FaUser,
  FaCalendar,
  FaHardDrive,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";
import { toast } from "react-toastify";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
          <button
            onClick={() => navigate("/explore")}
            className="btn btn-primary text-white"
          >
            Back to Games
          </button>
        </motion.div>
      </div>
    );
  }

  const handleDownload = () => {
    window.open(game.downloadLink, "_blank");
    toast.success("Opening download page...");
  };

  return (
    <div className="min-h-screen bg-dark py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-accent hover:text-primary transition mb-6"
        >
          <FaArrowLeft />
          Go Back
        </motion.button>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Cover Image */}
          <div className="lg:col-span-1">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={game.coverPhoto}
              alt={game.title}
              className="w-full rounded-2xl shadow-2xl shadow-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="btn btn-primary w-full mt-6 text-white font-bold"
            >
              <FaDownload />
              Download Game
            </motion.button>
          </div>

          {/* Game Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {game.title}
              </h1>

              {/* Rating and Category */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="badge badge-primary text-white">
                  {game.category}
                </div>
                <div className="flex items-center gap-2 bg-accent bg-opacity-20 px-4 py-2 rounded-lg">
                  <FaStar className="text-accent" />
                  <span className="text-white font-bold text-lg">
                    {game.ratings}/5
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {game.description}
              </p>

              {/* Game Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUser className="text-primary" size={20} />
                    <span className="text-gray-400">Developer</span>
                  </div>
                  <p className="text-white text-lg font-bold">
                    {game.developer}
                  </p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaCalendar className="text-primary" size={20} />
                    <span className="text-gray-400">Release Date</span>
                  </div>
                  <p className="text-white text-lg font-bold">
                    {new Date(game.releaseDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHardDrive className="text-primary" size={20} />
                    <span className="text-gray-400">File Size</span>
                  </div>
                  <p className="text-white text-lg font-bold">
                    {game.fileSize}
                  </p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaGlobe className="text-primary" size={20} />
                    <span className="text-gray-400">Language</span>
                  </div>
                  <p className="text-white text-lg font-bold">
                    {game.language}
                  </p>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-gradient-to-r from-secondary to-dark border border-primary border-opacity-30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">
                  System Requirements
                </h3>
                <p className="text-gray-300 text-lg">
                  {game.systemRequirements}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Related Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Similar Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gamesData
              .filter((g) => g.category === game.category && g.id !== game.id)
              .slice(0, 3)
              .map((relatedGame) => (
                <motion.div
                  key={relatedGame.id}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/game/${relatedGame.id}`)}
                  className="cursor-pointer"
                >
                  <div className="card bg-base-200 shadow-lg hover:shadow-2xl hover:shadow-primary transition">
                    <figure>
                      <img
                        src={relatedGame.coverPhoto}
                        alt={relatedGame.title}
                        className="w-full h-40 object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-white text-sm truncate">
                        {relatedGame.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="badge badge-primary text-white">
                          {relatedGame.category}
                        </span>
                        <div className="flex items-center gap-1 text-accent">
                          <FaStar size={16} />
                          <span>{relatedGame.ratings}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GameDetails;
