import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const SocialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ms-hossen/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/parttimecoder/",
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/parttimecoder/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@Part-TimeCoder",
  },
];

const MeetDeveloper = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center px-4">

      {/* ✅ SAME BACKGROUND SYSTEM AS BANNER */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Animated glow (matched) */}
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

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
      >

        {/* 🖼️ IMAGE (updated to match theme) */}
        <div className="flex justify-center">
          <div className="relative group">

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl group-hover:blur-2xl transition"></div>

            <img
              src="/Developer.png"
              alt="Developer"
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-cyan-400/40 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* 🧠 CONTENT */}
        <div className="text-center md:text-left">

          {/* Heading (match Banner style) */}
          <p className="text-gray-400 text-sm md:text-lg mb-2">
            Meet the
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            <span className="text-cyan-400">Developer</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6">
            Hi! I'm{" "}
            <a
              href="https://www.linkedin.com/in/ms-hossen/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-400 hover:text-white transition"
            >
              MS Hossen
            </a>
            , the developer behind this project. This game library is part of my
            journey to improve frontend skills and build real-world applications
            using React and modern UI systems.
          </p>

          {/* 🔗 SOCIALS (now aligned with banner buttons) */}
          <div className="flex justify-center md:justify-start gap-4">
            {SocialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition hover:scale-105"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MeetDeveloper;