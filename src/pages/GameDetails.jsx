import React from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import gamesData from "../data/games.json";
import {
  FaStar,
  FaDownload,
  FaUser,
  FaCalendar,
  FaHdd,
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
          <button
            onClick={() => navigate("/explore")}
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Back to Games
          </button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    window.open(game.downloadLink, "_blank");
    toast.success("Opening download page...");
  };

  return (
    <section className="relative min-h-screen py-16 overflow-hidden bg-gray-900">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 mb-8 transition"
        >
          <FaArrowLeft /> Go Back
        </motion.button>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={game.coverPhoto}
              alt={game.title}
              className="w-full rounded-xl shadow-lg shadow-cyan-500/20"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              <FaDownload /> Download Game
            </motion.button>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2">
            {/* title */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              {game.title}
            </h1>

            {/* tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-sm font-bold">
                {game.category}
              </span>

              <span className="flex items-center gap-1 text-cyan-400">
                <FaStar />
                <span className="text-white font-semibold">
                  {game.ratings}/5
                </span>
              </span>
            </div>

            {/* description */}
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {game.description}
            </p>

            {/* specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Spec
                icon={<FaUser />}
                label="Developer"
                value={game.developer}
              />
              <Spec
                icon={<FaCalendar />}
                label="Release"
                value={new Date(game.releaseDate).toLocaleDateString()}
              />
              <Spec icon={<FaHdd />} label="File Size" value={game.fileSize} />
              <Spec icon={<FaGlobe />} label="Language" value={game.language} />
            </div>

            {/* system requirements */}
            <div className="mt-10 p-6 rounded-xl bg-black/40 border border-gray-700 backdrop-blur-md">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                System Requirements
              </h3>
              <p className="text-gray-400">{game.systemRequirements}</p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Games</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gamesData
              .filter((g) => g.category === game.category && g.id !== game.id)
              .slice(0, 3)
              .map((related) => (
                <motion.div
                  key={related.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => navigate(`/game/${related.id}`)}
                  className="cursor-pointer bg-black/40 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition"
                >
                  <img
                    src={related.coverPhoto}
                    alt={`${related.title} cover art`}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-white font-semibold truncate">
                      {related.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* small reusable component */
const Spec = ({ icon, label, value }) => (
  <div className="p-4 rounded-xl bg-black/40 border border-gray-700 backdrop-blur-md hover:border-cyan-400 transition">
    <div className="flex items-center gap-2 text-cyan-400 mb-2">
      {icon}
      <span className="text-gray-400">{label}</span>
    </div>
    <p className="text-white font-semibold">{value}</p>
  </div>
);

export default GameDetails;
