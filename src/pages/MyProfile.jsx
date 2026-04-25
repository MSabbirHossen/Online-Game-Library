import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-dark py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Card */}
          <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-2xl shadow-primary shadow-opacity-50">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-white text-center mb-8">
                My Profile
              </h1>

              {/* Profile Picture */}
              <div className="flex justify-center mb-8">
                <div className="avatar placeholder">
                  <div className="bg-primary text-white rounded-full w-32">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} />
                    ) : (
                      <span className="text-4xl">
                        {user?.displayName?.charAt(0) || "U"}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="space-y-6">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold flex items-center gap-2">
                      <FaUser className="text-primary" />
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName || "Not set"}
                    disabled
                    className="input input-bordered bg-base-100 text-white border-gray-600"
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold flex items-center gap-2">
                      <FaEnvelope className="text-primary" />
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user?.email || "Not set"}
                    disabled
                    className="input input-bordered bg-base-100 text-white border-gray-600"
                  />
                </div>

                {/* Member Since */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Member Since
                    </span>
                  </label>
                  <input
                    type="text"
                    value={
                      user?.metadata?.creationTime
                        ? new Date(
                            user.metadata.creationTime,
                          ).toLocaleDateString()
                        : "Unknown"
                    }
                    disabled
                    className="input input-bordered bg-base-100 text-white border-gray-600"
                  />
                </div>

                {/* Action Buttons */}
                <div className="divider text-gray-400"></div>

                <div className="flex flex-col gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate("/update-profile")}
                    className="btn btn-primary text-white font-bold flex items-center gap-2"
                  >
                    <FaEdit />
                    Edit Profile
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="btn btn-outline btn-error text-error hover:bg-error hover:text-white font-bold flex items-center gap-2"
                  >
                    <FaSignOutAlt />
                    Logout
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-base-200 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Account Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="stat bg-base-100 rounded-lg">
                <div className="stat-title text-gray-400">Account Status</div>
                <div className="stat-value text-primary text-2xl">Active</div>
                <div className="stat-desc text-success">Verified</div>
              </div>
              <div className="stat bg-base-100 rounded-lg">
                <div className="stat-title text-gray-400">Last Login</div>
                <div className="stat-value text-accent text-2xl">Today</div>
                <div className="stat-desc">Just now</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProfile;
