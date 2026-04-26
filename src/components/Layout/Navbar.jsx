import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { FaGamepad, FaUser, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
      setOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      {/* glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500/30"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-1 sm:gap-2 group flex-shrink-0"
        >
          <FaGamepad className="text-cyan-400 text-xl sm:text-2xl group-hover:scale-110 transition" />
          <span className="text-base sm:text-lg lg:text-xl font-black text-white hidden md:inline">
            <span className="">Game</span>
            <span className="text-cyan-400">Hub</span>
          </span>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xs sm:text-sm lg:text-base font-semibold transition ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `text-xs sm:text-sm lg:text-base font-semibold transition ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
              }`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive }) =>
              `text-xs sm:text-sm lg:text-base font-semibold transition ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
              }`
            }
          >
            Developer
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Auth */}
          {isLoggedIn ? (
            <div className="relative">
              {/* avatar */}
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full bg-black/40 border border-gray-700 flex items-center justify-center hover:border-cyan-400 transition overflow-hidden"
              >
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="user" />
                ) : (
                  <FaUser className="text-cyan-400" />
                )}
              </button>

              {/* dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-48 sm:w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-700 text-sm text-gray-300">
                    {user?.displayName || user?.email}
                  </div>

                  <NavLink
                    to="/my-profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-300"
                  >
                    <FaUser /> Profile
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/login"
                className="px-4 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 text-sm rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                Register
              </NavLink>
            </div>
          )}

          {/* mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
