import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import { auth } from "../../firebase.config";
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
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-200 shadow-2xl shadow-primary shadow-opacity-50">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-center mb-6">
              Log in to your Gamehub account
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <div className="input-group">
                  <span className="bg-primary text-dark">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="input-group">
                  <span className="bg-primary text-dark">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-accent hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-white font-bold"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="btn btn-outline btn-primary w-full text-primary hover:bg-primary hover:text-dark"
            >
              <FaGoogle />
              Login with Google
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-400 mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary hover:underline font-bold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
