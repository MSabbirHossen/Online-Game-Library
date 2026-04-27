import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const games = [
  {
    id: 1,
    title: "Player Unknown's Battlegrounds",
    subtitle: "Drop in. Loot. Survive.",
    image:
      "https://th.bing.com/th/id/R.c05ca003174f81544755e5a26f27a77c?rik=pMclxGLwLOVnBg&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "Fortnite",
    subtitle: "Build. Fight. Be the last one standing.",
    image: "https://wallpapercave.com/wp/wp2585294.jpg",
  },
  {
    id: 3,
    title: "Call of Duty: Mobile",
    subtitle: "Fast action. Tactical combat. Global warfare.",
    image:
      "https://wallpapers.com/images/hd/4k-call-of-duty-mobile-poster-5c50tuqihdfcliuz.jpg",
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

const buttonBase =
  "px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2";

const primaryBtn = `${buttonBase} bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-105`;

const outlineBtn = `${buttonBase} border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:scale-105`;

const controlBtn =
  "z-20 cursor-pointer absolute top-1/2 -translate-y-1/2 p-3 bg-black/40 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-black transition hover:scale-110";

const Banner = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const currentGame = games[index]; // ✅ DRY access

  const nextSlide = () => setIndex(([prev]) => [(prev + 1) % games.length, 1]);

  const prevSlide = () =>
    setIndex(([prev]) => [(prev - 1 + games.length) % games.length, -1]);

  /* autoplay */
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />

      {/* Glow */}
      <motion.div
        animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -80, 80, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-16 px-4">
        {/* SLIDE */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentGame.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center"
          >
            {/* TEXT */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm md:text-lg mb-2">
                Featured Game
              </p>

              <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
                <span className="text-cyan-400">{currentGame.title}</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-lg mb-6">
                {currentGame.subtitle}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={currentGame.image}
                alt={currentGame.title}
                className="w-[320px] h-[220px] md:w-[500px] md:h-[350px] object-cover rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/explore" className={primaryBtn}>
            Explore Games <FaArrowRight />
          </Link>

          <a href="#popular" className={outlineBtn}>
            View Popular
          </a>
        </div>
      </div>

      {/* CONTROLS */}
      <button onClick={prevSlide} className={`${controlBtn} left-4`}>
        <FaChevronLeft />
      </button>

      <button onClick={nextSlide} className={`${controlBtn} right-4`}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Banner;
