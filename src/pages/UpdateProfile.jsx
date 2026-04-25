import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaArrowLeft, FaUser, FaImage, FaEdit } from "react-icons/fa";

const UpdateProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      toast.success("Profile updated successfully");
      navigate("/my-profile");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 py-16 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl p-8 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur-md shadow-lg shadow-cyan-500/10"
      >

        {/* back */}
        <button
          onClick={() => navigate("/my-profile")}
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-6"
        >
          <FaArrowLeft /> Back to Profile
        </button>

        {/* header */}
        <div className="text-center mb-8">
          <FaEdit className="text-cyan-400 text-3xl mx-auto mb-3" />
          <h1 className="text-3xl font-black text-white">
            Update <span className="text-cyan-400">Profile</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Modify your identity settings
          </p>
        </div>

        {/* preview avatar */}
        {photoURL && (
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/20">
              <img src={photoURL} alt="preview" />
            </div>
          </div>
        )}

        {/* form */}
        <form onSubmit={handleUpdateProfile} className="space-y-5">

          {/* name */}
          <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
            <label className="text-gray-400 text-sm flex items-center gap-2 mb-2">
              <FaUser className="text-cyan-400" /> Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-transparent text-white outline-none"
            />
          </div>

          {/* photo */}
          <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
            <label className="text-gray-400 text-sm flex items-center gap-2 mb-2">
              <FaImage className="text-cyan-400" /> Photo URL
            </label>
            <input
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://image-url.com"
              className="w-full bg-transparent text-white outline-none"
            />
          </div>

          {/* update */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

          {/* cancel */}
          <button
            type="button"
            onClick={() => navigate("/my-profile")}
            className="w-full py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Cancel
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default UpdateProfile;