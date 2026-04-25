import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaBell, FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (email) {
      toast.success("Subscribed successfully! 🎮");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <FaBell className="text-cyan-400 text-3xl" />
            </div>
          </div>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stay in the{" "}
            <span className="text-cyan-400">Game</span>
          </h2>

          {/* subtitle */}
          <p className="text-gray-300 text-lg mb-10">
            Get updates on new releases, trending games, and exclusive developer news.
          </p>

          {/* form */}
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* input */}
            <div className="flex-1 relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                required
              />
            </div>

            {/* button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Subscribe
            </button>
          </form>

          {/* footer note */}
          <p className="text-xs text-gray-500 mt-6">
            No spam. Unsubscribe anytime.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;