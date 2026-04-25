import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { auth } from "../../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <title>Login - GameHub</title>

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

        {/* heading */}
        <h1 className="text-3xl font-black text-white text-center mb-2">
          Welcome{" "}
          <span className="text-cyan-400">Back</span>
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Sign in to continue your gaming journey
        </p>

        {/* form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="flex items-center mt-1 bg-black/30 border border-gray-700 rounded-lg focus-within:border-cyan-400 transition">
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
          </div>

          {/* password */}
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <div className="flex items-center mt-1 bg-black/30 border border-gray-700 rounded-lg focus-within:border-cyan-400 transition">
              <span className="px-3 text-cyan-400">
                <FaLock />
              </span>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full py-3 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* forgot */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* divider */}
        <div className="my-6 text-center text-gray-500 text-sm">
          OR
        </div>

        {/* google login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* register */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;