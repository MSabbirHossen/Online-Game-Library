import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import gamesData from "../data/games.json";
import { FaArrowRight, FaEnvelope, FaBell } from "react-icons/fa";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Sort games by rating
    const sortedGames = [...gamesData].sort(
      (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings),
    );
    setGames(sortedGames.slice(0, 6));
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your email for updates.");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-dark">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Popular Games
              </h2>
              <p className="text-gray-400 text-lg">
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
      </section>

      {/* Featured Developers Marquee */}
      <section className="py-12 bg-gradient-to-r from-secondary to-dark border-y border-primary border-opacity-30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Featured Developers
          </h3>
          <Marquee gradient gradientColor="#1a1a1a" speed={40}>
            <div className="flex gap-12 px-6">
              {[
                "Epic Games",
                "Supercell",
                "Krafton",
                "HoYoverse",
                "Innersloth",
                "Mojang",
                "Garena",
              ].map((dev, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-primary bg-opacity-20 rounded-lg p-4 w-32 flex items-center justify-center">
                    <span className="text-accent font-bold">{dev}</span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-dark to-secondary">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-primary shadow-opacity-50"
          >
            <FaBell className="text-4xl text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-100 text-lg mb-6">
              Subscribe to our newsletter and get notified about new games and
              exclusive developer updates.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col md:flex-row gap-3"
            >
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-4 text-dark" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary text-white font-bold hover:bg-opacity-80 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-dark text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore More?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of gamers discovering amazing indie games. Download
            your favorites and support independent developers today.
          </p>
          <Link
            to="/explore"
            className="btn btn-primary btn-lg text-white hover:scale-105 transition"
          >
            Start Exploring <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
