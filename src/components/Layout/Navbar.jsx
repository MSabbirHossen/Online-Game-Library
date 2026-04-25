import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { FaGamepad, FaUser, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
      setIsMenuOpen(false);
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <nav className="navbar bg-neutral-content shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary hover:text-accent transition"
        >
          <FaGamepad size={28} />
          <span className="hidden sm:inline">GameHub</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 gap-2">
          <Link
            to="/"
            className="btn btn-ghost text-base-content hover:bg-neutral-content hover:text-dark transition"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="btn btn-ghost text-base-content hover:bg-neutral-content hover:text-dark transition"
          >
            Explore
          </Link>
        </div>
      </div>

      <div className="navbar-end gap-2">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <button
              className="btn btn-circle btn-ghost avatar"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-10 rounded-full bg-primary flex items-center justify-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <FaUser className="text-white" />
                )}
              </div>
            </button>
            {isMenuOpen && (
              <ul className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                <li className="text-base-content mb-2">
                  <span>{user?.displayName || user?.email}</span>
                </li>
                <li>
                  <Link
                    to="/my-profile"
                    className="text-base-content hover:outline hover:text-dark"
                  >
                    <FaUser /> My Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-base-content hover:bg-red-600 hover:text-white"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="gap-2 flex">
            <Link to="/login" className="btn btn-outline btn-primary text-base-content hover:bg-primary hover:text-white transition">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline btn-primary text-base-content hover:bg-primary hover:text-white transition"
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <button className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="dropdown-content menu bg-neutral-content rounded-box z-[1] w-52 p-2 shadow text-base-content">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
