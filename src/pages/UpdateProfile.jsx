import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaArrowLeft, FaUser, FaImage } from "react-icons/fa";

const UpdateProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
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
          {/* Back Button */}
          <button
            onClick={() => navigate("/my-profile")}
            className="flex items-center gap-2 text-accent hover:text-primary transition mb-6"
          >
            <FaArrowLeft />
            Back to Profile
          </button>

          {/* Update Form Card */}
          <div className="card bg-base-200 shadow-2xl shadow-primary shadow-opacity-50">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-white mb-2">
                Update Profile
              </h1>
              <p className="text-gray-400 mb-6">
                Update your name and profile picture
              </p>

              {/* Current Photo Preview */}
              {photoURL && (
                <div className="flex justify-center mb-6">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={photoURL} alt={name} />
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold flex items-center gap-2">
                      <FaUser className="text-primary" />
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Photo URL Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold flex items-center gap-2">
                      <FaImage className="text-primary" />
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Enter a direct link to an image (JPG, PNG, etc.)
                    </span>
                  </label>
                </div>

                {/* Update Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full text-white font-bold"
                >
                  {loading ? "Updating..." : "Update Information"}
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => navigate("/my-profile")}
                  className="btn btn-outline w-full text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-base-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Tips</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  Use a clear, recognizable photo for your profile picture
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Photo URL must be a direct link to an image file</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Recommended image size: at least 200x200 pixels</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpdateProfile;
