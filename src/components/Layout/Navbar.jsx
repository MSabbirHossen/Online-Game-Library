import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { FaGamepad, FaUser, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";


const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Developer", path: "/developers" },
];

const AUTH_ITEMS = [
  { name: "Profile", path: "/my-profile", icon: <FaUser /> },
  { name: "Logout", action: "logout", icon: <FaSignOutAlt /> },
];

const GUEST_ITEMS = [
  { name: "Login", path: "/login", variant: "outline" },
  { name: "Register", path: "/register", variant: "primary" },
];


const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block px-4 py-3 text-sm ${
    isActive
      ? "text-cyan-400 bg-gray-800"
      : "text-gray-300 hover:bg-gray-800 hover:text-cyan-300"
  }`;

const buttonStyles = {
  outline:
    "px-4 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition",
  primary:
    "px-4 py-2 text-sm rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition",
};


const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
      setOpenMenu(false);
      setOpenProfile(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) setOpenProfile(false);
      if (!e.target.closest(".mobile-menu")) setOpenMenu(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  const renderNavLinks = (isMobile = false) =>
    NAV_ITEMS.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        className={isMobile ? mobileLinkClass : navLinkClass}
        onClick={() => setOpenMenu(false)}
      >
        {item.name}
      </NavLink>
    ));

  const renderAuthDropdown = () =>
    AUTH_ITEMS.map((item) => {
      if (item.action === "logout") {
        return (
          <button
            key={item.name}
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-400 hover:bg-red-500/10"
          >
            {item.icon} {item.name}
          </button>
        );
      }

      return (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => setOpenProfile(false)}
          className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-300"
        >
          {item.icon} {item.name}
        </NavLink>
      );
    });


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      {/* glow line */}
      <div className="absolute bottom-0 w-full h-[1px] bg-cyan-500/30"></div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Mobile Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-gray-300 mobile-menu"
        >
          ☰
        </button>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <FaGamepad className="text-cyan-400 sm:text-xl group-hover:scale-110 transition" />
          <span className="text-xs sm:text-lg font-black text-white md:inline">
            Game<span className="text-cyan-400">Hub</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {renderNavLinks()}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Authenticated */}
          {isLoggedIn ? (
            <div className="relative profile-menu">

              {/* Avatar */}
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-full bg-black/40 border border-gray-700 flex items-center justify-center hover:border-cyan-400 transition overflow-hidden"
              >
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="user" />
                ) : (
                  <FaUser className="text-cyan-400" />
                )}
              </button>

              {/* Dropdown */}
              {openProfile && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-700 text-sm text-gray-300">
                    {user?.displayName || user?.email}
                  </div>

                  {renderAuthDropdown()}
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              {GUEST_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={buttonStyles[item.variant]}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 mobile-menu">
          {renderNavLinks(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;