import React from "react";
import { Link } from "react-router";
import {
  FaGamepad,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/parttimecoder/",
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/parttimecoder/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/parttimecoder/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@Part-TimeCoder",
  },
];

const Footer = () => {
  const comingSoon = (e) => {
    e.preventDefault();
    alert("This section will be available soon 🚀");
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaGamepad className="text-cyan-400 text-2xl" />
              <span className="text-2xl font-black">GameHub</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Discover and support indie game developers. Your gateway to
              trending, indie, and AAA gaming experiences.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link className="hover:text-cyan-300 transition" to="/">
                Home
              </Link>
              <Link className="hover:text-cyan-300 transition" to="/explore">
                Explore Games
              </Link>
            </div>
          </div>

          {/* support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">
              Support
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a onClick={comingSoon} className="hover:text-cyan-300 cursor-pointer">
                About Us
              </a>
              <a onClick={comingSoon} className="hover:text-cyan-300 cursor-pointer">
                Contact
              </a>
              <a onClick={comingSoon} className="hover:text-cyan-300 cursor-pointer">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">
              {SocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/30 border border-gray-700 hover:border-cyan-400 hover:text-cyan-300 hover:scale-110 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-14 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} GameHub. All rights reserved.
          </p>

          <p>
            Made with <span className="text-cyan-400">♥</span> by{" "}
            <a
              href="https://www.linkedin.com/in/ms-hossen/"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              MS Hossen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;