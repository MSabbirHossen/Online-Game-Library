import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock } from "react-icons/fa";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  // 🔄 Loading state (Cyber Gate)
  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

        {/* glow */}
        <div className="absolute w-80 h-80 bg-cyan-500/10 blur-[120px]"></div>

        {/* grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <FaUserLock className="text-cyan-400 text-5xl mx-auto mb-4 animate-pulse" />

          <h1 className="text-2xl font-bold text-white mb-2">
            Verifying Access
          </h1>

          <p className="text-gray-400 mb-6">
            Checking neural authentication...
          </p>

          {/* animated loader */}
          <div className="flex justify-center">
            <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ❌ Not authenticated
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;