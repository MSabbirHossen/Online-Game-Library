import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const CTA = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Ready to Explore More?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
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
    </div>
  );
};

export default CTA;
