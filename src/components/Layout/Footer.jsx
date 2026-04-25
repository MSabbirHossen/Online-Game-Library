import React from "react";
import { Link } from "react-router";
import {
  FaGamepad,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
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
  const toBePublished = () => {
    alert("This section will be published soon. Stay tuned!");
  };

  return (
    <footer className="bg-neutral-content text-base-content mt-16">
      <div className="footer p-10 bg-opacity-50 flex justify-around items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaGamepad size={24} className="text-black hover:text-primary" />
            <span className="text-2xl font-bold">Gamehub</span>
          </div>
          <p className="text-md text-black font-semibold">
            Discover and support indie game developers. The ultimate platform
            for game lovers.
          </p>
        </div>

        <div>
          <span className="font-bold text-black hover:text-primary text-md">
            Quick Links
          </span>
          <Link to="/" className="link link-hover text-black">
            Home
          </Link>
          <Link to="/explore" className="link link-hover text-black">
            Explore Games
          </Link>
        </div>

        <div>
          <span className="font-bold text-black hover:text-primary text-md">
            Support
          </span>
          <a
            href="#"
            onClick={toBePublished}
            className="link link-hover text-black"
          >
            About Us
          </a>
          <a
            href="#"
            onClick={toBePublished}
            className="link link-hover text-black"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={toBePublished}
            className="link link-hover text-black"
          >
            Privacy Policy
          </a>
        </div>

        <div>
          <span className="font-bold text-black hover:text-primary text-md">
            Social Links
          </span>
          <div className="flex gap-4 text-2xl mt-2">
            {SocialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition p-1 rounded"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer footer-center bg-black bg-opacity-50 border-t border-primary border-opacity-20 p-4">
        <p className="text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved. Made with
          ❤️ by
          <Link
            to="https://www.linkedin.com/in/ms-hossen/"
            target="_blank"
            className="text-primary hover:text-secondary transition font-bold"
          >
            {" "}
            <strong> MS Hossen</strong>{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
