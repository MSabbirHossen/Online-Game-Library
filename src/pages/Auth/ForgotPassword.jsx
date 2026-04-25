import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowLeft, FaShieldAlt } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Recovery link sent to your email!");

      setTimeout(() => {
        window.open("https://mail.google.com", "_blank");
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <title>Forgot Password - GameHub</title>

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur-md shadow-lg shadow-cyan-500/10"
      >

        {/* back */}
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 mb-6 transition"
        >
          <FaArrowLeft />
          Back to Login
        </button>

        {/* icon */}
        <div className="flex justify-center mb-4 text-cyan-400 text-3xl">
          <FaShieldAlt />
        </div>

        {/* title */}
        <h1 className="text-3xl font-black text-white text-center">
          Password{" "}
          <span className="text-cyan-400">Recovery</span>
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Enter your email to receive a secure reset link
        </p>

        {/* form */}
        <form onSubmit={handleResetPassword} className="space-y-5">

          {/* email */}
          <div className="flex items-center bg-black/30 border border-gray-700 rounded-lg focus-within:border-cyan-400 transition">
            <span className="px-3 text-cyan-400">
              <FaEnvelope />
            </span>

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full py-3 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* note */}
        <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
          A secure reset link will be sent to your email. Follow the
          instructions to regain access to your account.
        </p>

      </motion.div>
    </section>
  );
};

export default ForgotPassword;