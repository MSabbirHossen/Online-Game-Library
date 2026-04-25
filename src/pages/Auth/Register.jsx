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
    return (
      /[A-Z]/.test(pwd) &&
      /[a-z]/.test(pwd) &&
      pwd.length >= 6
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error("Password must include uppercase, lowercase, and 6+ chars");
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
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL,
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
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* form card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur-md shadow-lg shadow-cyan-500/10"
      >

        {/* title */}
        <h1 className="text-3xl font-black text-white text-center">
          Join{" "}
          <span className="text-cyan-400">GameHub</span>
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Create your gaming identity
        </p>

        {/* form */}
        <form onSubmit={handleRegister} className="space-y-4">

          <Input icon={<FaUser />} value={name} setValue={setName} placeholder="Full Name" />
          <Input icon={<FaEnvelope />} value={email} setValue={setEmail} placeholder="Email" type="email" />
          <Input icon={<FaImage />} value={photoURL} setValue={setPhotoURL} placeholder="Photo URL (optional)" type="url" />
          <Input icon={<FaLock />} value={password} setValue={setPassword} placeholder="Password" type="password" />
          <Input icon={<FaLock />} value={confirmPassword} setValue={setConfirmPassword} placeholder="Confirm Password" type="password" />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* divider */}
        <div className="my-6 text-center text-gray-500 text-sm">
          OR
        </div>

        {/* google */}
        <button
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* login */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 font-semibold hover:text-cyan-300">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

/* reusable input */
const Input = ({ icon, value, setValue, placeholder, type = "text" }) => (
  <div className="flex items-center bg-black/30 border border-gray-700 rounded-lg focus-within:border-cyan-400 transition">
    <span className="px-3 text-cyan-400">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-3 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required={type !== "url"}
    />
  </div>
);

export default Register;