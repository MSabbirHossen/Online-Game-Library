import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";


const Newsletter = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your email for updates.");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
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
  );
};

export default Newsletter;
