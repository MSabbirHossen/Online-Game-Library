import React from "react";
import { Link } from "react-router";
import {
  FaGamepad,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-dark text-white mt-16">
      <div className="footer p-10 bg-opacity-50">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaGamepad size={24} className="text-primary" />
            <span className="text-xl font-bold">Gamehub</span>
          </div>
          <p className="text-sm text-gray-400">
            Discover and support indie game developers. The ultimate platform
            for game lovers.
          </p>
        </div>

        <div>
          <span className="footer-title text-primary">Quick Links</span>
          <Link to="/" className="link link-hover text-gray-300">
            Home
          </Link>
          <Link to="/explore" className="link link-hover text-gray-300">
            Explore Games
          </Link>
        </div>

        <div>
          <span className="footer-title text-primary">Support</span>
          <a href="#" className="link link-hover text-gray-300">
            About Us
          </a>
          <a href="#" className="link link-hover text-gray-300">
            Contact
          </a>
          <a href="#" className="link link-hover text-gray-300">
            Privacy Policy
          </a>
        </div>

        <div>
          <span className="footer-title text-primary">Social</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer footer-center bg-black bg-opacity-50 border-t border-primary border-opacity-20 p-4">
        <p className="text-gray-400">
          © 2024 Gamehub. All rights reserved. Made with ❤️ for game developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
