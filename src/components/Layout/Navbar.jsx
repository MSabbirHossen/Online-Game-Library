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
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary hover:text-black transition"
        >
          <FaGamepad size={28} />
          <span className="hidden sm:inline">GameHub</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-ghost text-base-content hover:outline-1 hover:text-black transition ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `btn btn-ghost text-base-content hover:outline-1 hover:text-black transition ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            Explore
          </NavLink>
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
                  <NavLink
                    to="/my-profile"
                    className="text-base-content hover:outline-1 hover:text-black transition w-full text-left"
                  >
                    <FaUser /> My Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-base-content hover:bg-red-600 hover:text-white hover:outline-1 transition w-full text-left"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="gap-2 flex">
            <NavLink to="/login" className={({ isActive }) =>
              `btn bg-neutral-content text-base-content hover:outline-1 hover:text-black transition ${
                isActive ? "bg-primary text-white" : ""
              }`
            }>
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
              `btn bg-neutral-content text-base-content hover:outline-1 hover:text-black transition ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
            >
              Register
            </NavLink>
            
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
