import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Pre-fill email if coming from login page
    const state = location.state;
    if (state && state.email) {
      setEmail(state.email);
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
      toast.success("Password reset email sent! Check your inbox.");

      // Open Gmail in a new tab
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
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-200 shadow-2xl shadow-primary shadow-opacity-50">
          <div className="card-body">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-primary hover:text-accent transition mb-4"
            >
              <FaArrowLeft />
              Back to Login
            </button>

            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Reset Password
            </h1>
            <p className="text-gray-400 text-center mb-6">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email Address</span>
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

              {/* Reset Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-white font-bold"
              >
                {loading ? "Sending email..." : "Send Reset Link"}
              </button>
            </form>

            <div className="divider text-gray-400">OR</div>

            <p className="text-center text-gray-400 text-sm">
              After clicking "Send Reset Link", you'll be redirected to Gmail.
              Follow the instructions in the reset email to create a new
              password.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
