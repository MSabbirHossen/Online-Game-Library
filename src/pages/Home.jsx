import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import { FaArrowRight, FaEnvelope, FaBell } from "react-icons/fa";
import { toast } from "react-toastify";
import Newsletter from "../components/Newsletter/Newsletter";
import CTA from "../components/CtA/CtA";
import Developers from "../components/Developers/Developers";
import PopularGames from "../components/PopularGames/PopularGames";

const Home = () => {
  
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   // Sort games by rating
  //   const sortedGames = [...gamesData].sort(
  //     (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
  //   );
  //   setGames(sortedGames.slice(0, 6));
  // }, []);





  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //   },
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner / Slider */}
      <section className="relative h-96 md:h-screen bg-gradient-to-r from-secondary via-dark to-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white z-10 px-4"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Welcome to Gamehub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover and Support Indie Game Developers
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="btn btn-primary btn-lg text-white hover:scale-105 transition"
              >
                Explore Games <FaArrowRight />
              </Link>
              <a
                href="#popular"
                className="btn btn-outline btn-lg border-accent text-accent hover:bg-accent hover:text-dark"
              >
                View Popular Games
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 100, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"
          />
        </div>
      </section>

      {/* Popular Games Section */}
      <section id="popular" className="py-16 px-4 md:px-8 bg-dark">
      <PopularGames/>
      </section>

      {/* Featured Developers Marquee */}
      <section className="py-12 bg-gradient-to-l from-secondary-content to-gray-500 border-y border-primary border-opacity-30">
        <Developers/>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-base-content">
        <Newsletter/>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-base text-center">
        <CTA/>
      </section>
    </div>
  );
};

export default Home;
