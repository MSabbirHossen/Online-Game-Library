import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasMinLength = pwd.length >= 6;
    return hasUppercase && hasLowercase && hasMinLength;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must have: Uppercase letter, lowercase letter, and at least 6 characters",
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Registered with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-200 shadow-2xl shadow-primary shadow-opacity-50">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Join Gamehub
            </h1>
            <p className="text-gray-400 text-center mb-6">
              Create your account and start gaming
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <div className="input-group">
                  <span className="bg-primary text-dark">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

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

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <div className="input-group">
                  <span className="bg-primary text-dark">
                    <FaImage />
                  </span>
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
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
                <label className="label">
                  <span className="label-text-alt text-gray-400">
                    Must have uppercase, lowercase, and 6+ characters
                  </span>
                </label>
              </div>

              {/* Confirm Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Confirm Password
                  </span>
                </label>
                <div className="input-group">
                  <span className="bg-primary text-dark">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-gray-800 text-white border-gray-600 focus:border-primary"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-white font-bold"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Google Register */}
            <button
              onClick={handleGoogleRegister}
              disabled={loading}
              className="btn btn-outline btn-primary w-full text-primary hover:bg-primary hover:text-dark"
            >
              <FaGoogle />
              Register with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-bold"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
