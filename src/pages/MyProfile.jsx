import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaEdit, FaSignOutAlt, FaShieldAlt } from "react-icons/fa";
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
      toast.error(error.message);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden py-26">

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
        className="relative z-10 w-full max-w-2xl p-8 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur-md shadow-lg shadow-cyan-500/10"
      >

        {/* header */}
        <div className="text-center mb-8">
          <FaShieldAlt className="text-cyan-400 text-3xl mx-auto mb-3" />

          <h1 className="text-4xl font-black text-white">
            My <span className="text-cyan-400">Profile</span>
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Secure identity dashboard
          </p>
        </div>

        {/* avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full border-2 border-cyan-400 overflow-hidden bg-black/30 flex items-center justify-center text-cyan-400 text-3xl font-bold shadow-lg shadow-cyan-500/20">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="profile" />
            ) : (
              user?.displayName?.charAt(0) || "U"
            )}
          </div>
        </div>

        {/* info */}
        <div className="space-y-5">

          <ProfileField icon={<FaUser />} label="Full Name" value={user?.displayName || "Not set"} />
          <ProfileField icon={<FaEnvelope />} label="Email" value={user?.email || "Not set"} />

          <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
            <p className="text-gray-400 text-sm">Member Since</p>
            <p className="text-white font-semibold mt-1">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-8 space-y-3">

          <button
            onClick={() => navigate("/update-profile")}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition flex items-center justify-center gap-2"
          >
            <FaEdit /> Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 transition flex items-center justify-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* footer stats */}
        <div className="mt-10 grid grid-cols-2 gap-4">

          <div className="p-4 rounded-xl bg-black/30 border border-gray-700 text-center">
            <p className="text-cyan-400 font-bold">Active</p>
            <p className="text-gray-400 text-sm">Account Status</p>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-gray-700 text-center">
            <p className="text-cyan-400 font-bold">Verified</p>
            <p className="text-gray-400 text-sm">Security Level</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

/* reusable field */
const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-gray-700">
    <span className="text-cyan-400">{icon}</span>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

export default MyProfile;