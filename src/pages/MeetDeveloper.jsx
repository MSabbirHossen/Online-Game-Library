import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGraduationCap,
  FaBuilding,
  FaCode,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaStar,
  FaClock,
  FaGamepad,
  FaRocket,
  FaBug,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

export const SOCIAL_LINKS = [
  // Direct Contacts
  {
    name: "WhatsApp",
    handle: "+8801773511874",
    subHandle: "Direct Chat",
    category: "Direct Chat",
    role: "Instant Messaging & Voice",
    description:
      "Direct WhatsApp connection for quick project inquiries, instant messaging, and consultations.",
    link: "https://wa.me/+8801773511874",
    color: "#25D366",
    actionLabel: "Chat on WhatsApp",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
  {
    name: "Telegram",
    handle: "@sabb1rhossen",
    subHandle: "Direct Chat",
    category: "Direct Chat",
    role: "Instant Messaging & Updates",
    description:
      "Connect directly on Telegram for real-time discussions, dev updates, and community chats.",
    link: "https://t.me/sabb1rhossen",
    color: "#229ED9",
    actionLabel: "Open Telegram",
    icon: <FaTelegramPlane className="w-5 h-5" />,
  },
  {
    name: "Email",
    handle: "mshossen724@gmail.com",
    email: "mshossen724@gmail.com",
    subHandle: "Official Mail",
    category: "Direct Chat",
    role: "Official & Business Inquiries",
    description:
      "Direct email channel for business proposals, project discussions, and technical collaboration.",
    link: "mailto:mshossen724@gmail.com",
    isEmail: true,
    color: "#EA4335",
    actionLabel: "Send Email",
    icon: <FaEnvelope className="w-5 h-5" />,
  },

  // Official Platforms
  {
    name: "Portfolio",
    handle: "msabbirhossen.github.io",
    subHandle: "Personal Showcase",
    category: "Platforms",
    role: "Live Projects & Interactive Bio",
    description:
      "Explore full-stack web applications, interactive games, and personal software engineering journey.",
    link: "https://msabbirhossen.github.io/",
    color: "#8B5CF6",
    actionLabel: "Visit Portfolio",
    icon: <FaGlobe className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    handle: "@sabb1rhossen",
    subHandle: "Professional Network",
    category: "Platforms",
    role: "Professional Network & Career",
    description:
      "Connect for collaborations, technical discussions, software engineering opportunities, and networking.",
    link: "https://www.linkedin.com/in/sabb1rhossen/",
    color: "#0A66C2",
    actionLabel: "Connect on LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    handle: "@MSabbirHossen",
    subHandle: "Source Repositories",
    category: "Platforms",
    role: "Open Source & Codebases",
    description:
      "Explore repositories, active projects, and the full codebase behind GameHub and other applications.",
    link: "https://github.com/MSabbirHossen",
    color: "#6366F1",
    actionLabel: "View GitHub",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    handle: "@sabb1rhossen",
    subHandle: "Tech Content",
    category: "Platforms",
    role: "Tech Tutorials & Code Walkthroughs",
    description:
      "Programming walkthroughs, modern web architectures, and full-stack development tutorials.",
    link: "https://www.youtube.com/@sabb1rhossen",
    color: "#FF0000",
    actionLabel: "Visit YouTube",
    icon: <FaYoutube className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    handle: "@sabb1rhossen",
    subHandle: "Community & Updates",
    category: "Platforms",
    role: "Community Updates & Insights",
    description:
      "Community interactions, quick programming notes, and upcoming project launch updates.",
    link: "https://www.facebook.com/sabb1rhossen/",
    color: "#1877F2",
    actionLabel: "Follow on Facebook",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    handle: "@parttimecoder",
    subHandle: "Visual Stories",
    category: "Platforms",
    role: "Creative Highlights & BTS",
    description:
      "Behind the scenes, developer workspace snapshots, and daily coding journey highlights.",
    link: "https://www.instagram.com/parttimecoder/",
    color: "#E4405F",
    actionLabel: "Follow on Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },

  // Organizations & Ventures
  {
    name: "Exploratory Training Academy",
    subHandle: "Educational Institute",
    category: "Ventures",
    role: "Tech Training & Mentorship",
    description:
      "Empowering students and aspiring software engineers with hands-on training, real projects, and modern skills.",
    link: null,
    isUpcoming: true,
    statusText: "Soon to be launched",
    color: "#0284C7",
    actionLabel: "Coming Soon",
    icon: <FaGraduationCap className="w-5 h-5" />,
  },
  {
    name: "Part-time Coder",
    subHandle: "Tech Venture",
    category: "Ventures",
    role: "Software Studio & Products",
    description:
      "Engineering scalable software systems, interactive web applications, and bespoke digital solutions.",
    link: null,
    isUpcoming: true,
    statusText: "Soon to be launched",
    color: "#4F46E5",
    actionLabel: "Coming Soon",
    icon: <FaBuilding className="w-5 h-5" />,
  },
];

const TOPIC_TAGS = [
  { label: "🚀 Feature Suggestion", icon: FaRocket },
  { label: "🐞 Bug Report", icon: FaBug },
  { label: "🤝 Freelance / Collab", icon: FaHandshake },
  { label: "💡 General Feedback", icon: FaLightbulb },
  { label: "🎮 Game Request", icon: FaGamepad },
];

const TECH_STACK = [
  "React 19",
  "Tailwind CSS v4",
  "Firebase Auth",
  "JavaScript ES6+",
  "Framer Motion",
  "DaisyUI",
  "Node.js",
  "REST APIs",
  "System Architecture",
  "UI/UX Design",
];

export const MeetDeveloper = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleCopyEmail = (email = "mshossen724@gmail.com") => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPortfolio = () => {
    navigator.clipboard.writeText("https://msabbirhossen.github.io/");
    setCopiedLink(true);
    toast.success("Portfolio URL copied to clipboard!");
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getWhatsAppUrl = (text) => {
    const trimmed = text?.trim();
    const defaultMsg = "Hello MS Hossen! I saw GameHub and wanted to connect with you.";
    return `https://wa.me/+8801773511874?text=${encodeURIComponent(trimmed || defaultMsg)}`;
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl(feedbackText);
    window.open(url, "_blank", "noopener,noreferrer");
    setFeedbackSent(true);
    toast.success("Opening WhatsApp chat with developer...");
    setTimeout(() => {
      setFeedbackText("");
      setFeedbackSent(false);
    }, 4000);
  };

  const filteredLinks =
    filterCategory === "All"
      ? SOCIAL_LINKS
      : SOCIAL_LINKS.filter((item) => item.category === filterCategory);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Gradients & Glow System */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black pointer-events-none" />

      {/* Animated Glowing Orbs */}
      <motion.div
        animate={{ x: [0, 60, -60, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -60, 60, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Subtle Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <FaGamepad className="w-3.5 h-3.5" />
            Developer & Community Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet the <span className="text-cyan-400">Developer</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Connect with <strong className="text-cyan-300 font-bold">MS Hossen</strong> (Part-Time Coder), the creator and engineer behind GameHub. Explore open-source projects, get in touch for collaborations, or send instant feedback.
          </p>
        </motion.div>

        {/* Hero Developer Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gray-800/60 backdrop-blur-xl border border-gray-700/60 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50"
        >
          {/* Neon Top Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Left: Avatar & Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Image Container with Glow Ring */}
              <div className="relative shrink-0 group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-gray-900 shadow-xl">
                  <img
                    src="/Developer.png"
                    alt="MS Hossen"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://msabbirhossen.github.io/images/profile.png";
                    }}
                  />
                </div>
                {/* Active Status Badge */}
                <div
                  className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-gray-900/90 border border-emerald-500/50 px-2 py-0.5 rounded-full shadow-md"
                  title="Active & Ready for collaboration"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Active</span>
                </div>
              </div>

              {/* Developer Details */}
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    MS Hossen
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-semibold">
                    Part-Time Coder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                    GameHub Creator
                  </span>
                </div>

                <p className="text-sm font-semibold text-cyan-400">
                  Full-Stack Software Engineer • Web Architect & System Designer
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  Passionate about engineering cohesive, human-centered web platforms, interactive digital experiences, and scalable software systems. Crafting dynamic experiences with React, Node.js, Firebase, and cutting-edge UI design.
                </p>

                {/* Direct Contact Pills */}
                <div className="flex items-center gap-2 pt-2 flex-wrap justify-center sm:justify-start text-xs font-semibold">
                  <a
                    href="mailto:mshossen724@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900/70 hover:bg-gray-900 border border-gray-700/80 hover:border-red-500/50 text-gray-200 hover:text-white transition group"
                  >
                    <FaEnvelope className="text-red-400 group-hover:scale-110 transition" />
                    <span>mshossen724@gmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/+8801773511874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900/70 hover:bg-gray-900 border border-gray-700/80 hover:border-emerald-500/50 text-gray-200 hover:text-white transition group"
                  >
                    <FaWhatsapp className="text-emerald-400 group-hover:scale-110 transition" />
                    <span>+8801773511874</span>
                  </a>

                  <a
                    href="https://t.me/sabb1rhossen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900/70 hover:bg-gray-900 border border-gray-700/80 hover:border-sky-500/50 text-gray-200 hover:text-white transition group"
                  >
                    <FaTelegramPlane className="text-sky-400 group-hover:scale-110 transition" />
                    <span>@sabb1rhossen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="flex flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => handleCopyEmail()}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900/80 hover:bg-gray-900 border border-gray-700 hover:border-cyan-400 text-gray-200 hover:text-cyan-300 text-xs sm:text-sm font-bold transition shadow-md cursor-pointer"
              >
                {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <a
                href="https://msabbirhossen.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs sm:text-sm font-bold transition shadow-lg shadow-cyan-500/20"
              >
                <FaGlobe />
                <span>Visit Portfolio</span>
              </a>

              <a
                href="https://github.com/MSabbirHossen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900/80 hover:bg-gray-900 border border-gray-700 hover:border-indigo-400 text-gray-200 hover:text-indigo-300 text-xs sm:text-sm font-bold transition shadow-md"
              >
                <FaStar className="text-yellow-400" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>

          {/* Tech Stack Strip */}
          <div className="mt-8 pt-6 border-t border-gray-700/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <FaCode className="text-cyan-400" /> Core Toolkit:
            </span>
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-gray-900/80 border border-gray-700/60 text-gray-300 font-semibold text-[11px] hover:border-cyan-400/40 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Social Channels & Contact Directory */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Connect Across Channels & Ventures
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Direct contacts, social networks, code repositories, and educational initiatives.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex bg-gray-800/80 p-1 rounded-xl border border-gray-700 self-start sm:self-auto">
              {["All", "Direct Chat", "Platforms", "Ventures"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${filterCategory === cat
                    ? "bg-cyan-500 text-black shadow-md"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLinks.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700/60 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon + Handle + Action */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md transition-transform group-hover:scale-105"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-white tracking-tight truncate group-hover:text-cyan-300 transition">
                          {item.name}
                        </h4>
                        <span className="text-xs font-semibold text-gray-400 block truncate">
                          {item.handle || item.subHandle}
                        </span>
                      </div>
                    </div>

                    {/* External Link or Copy */}
                    <div className="shrink-0 flex items-center">
                      {item.isUpcoming ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                          <FaClock className="mr-1" /> Soon
                        </span>
                      ) : item.isEmail ? (
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(item.email)}
                          className="p-2 rounded-lg bg-gray-900/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-900 border border-gray-700/50 transition cursor-pointer"
                          title="Copy Email Address"
                        >
                          <FaCopy className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-900/60 text-gray-400 hover:text-cyan-300 hover:bg-gray-900 border border-gray-700/50 transition"
                          title={`Open ${item.name}`}
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Role Tag & Description */}
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-gray-900/60 text-cyan-400 border border-cyan-500/20 text-[11px] font-semibold mb-2">
                      {item.role || item.subHandle}
                    </span>
                    <p className="text-xs text-gray-300 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[11px] font-medium text-gray-400">
                    {item.subHandle || item.category}
                  </span>

                  {item.isUpcoming ? (
                    <span className="text-xs font-semibold text-gray-500 italic">
                      {item.statusText || "Soon to be added"}
                    </span>
                  ) : item.isEmail ? (
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(item.email)}
                      className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {copiedEmail ? "Copied!" : "Copy Email"} <FaCopy className="w-3 h-3" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition"
                    >
                      {item.actionLabel || "Visit"} <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Direct WhatsApp Feedback / Collaboration Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* About GameHub Vision Card */}
          <div className="lg:col-span-1 p-6 rounded-3xl bg-gray-800/60 backdrop-blur-xl border border-gray-700/60 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-cyan-400">
                <FaGamepad className="w-5 h-5" />
                <h4 className="text-lg font-bold text-white tracking-tight">
                  About GameHub Vision
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                GameHub was developed as a modern, high-performance web portal for gamers and game enthusiasts to discover, track, and explore top indie and AAA titles.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Built with a clean responsive layout, Firebase Authentication, dynamic search & filtering, and an aesthetic dark UI designed to elevate the gaming community experience.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 space-y-1.5">
              <span className="text-xs font-bold text-cyan-300 block">
                Open to Collabs & Custom Projects
              </span>
              <span className="text-[11px] text-gray-300 block">
                Looking for a full-stack engineer or have an exciting game library idea? Reach out directly via WhatsApp, Telegram, or Email!
              </span>
            </div>
          </div>

          {/* Quick Connect & Feedback Box */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-gray-800/60 backdrop-blur-xl border border-gray-700/60 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <FaWhatsapp className="w-5 h-5" />
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    Send a Note to MS Hossen
                  </h4>
                  <p className="text-xs text-gray-400">
                    Thoughts, bug reports, feature suggestions, or hire inquiries sent directly to WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {feedbackSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center justify-center text-center space-y-2 animate-fade-in my-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg shadow-emerald-500/30 font-bold">
                  <FaCheck className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">Opening WhatsApp...</h5>
                <p className="text-xs text-gray-300 max-w-sm">
                  Your message is ready to send to MS Hossen (<strong className="text-emerald-400">+8801773511874</strong>).
                </p>
                <a
                  href={getWhatsAppUrl(feedbackText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Click here if WhatsApp didn't open automatically <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                {/* Topic Quick Chips */}
                <div className="flex gap-2 flex-wrap">
                  {TOPIC_TAGS.map(({ label }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() =>
                        setFeedbackText((prev) =>
                          prev ? `${prev}\n[Topic: ${label}] ` : `[Topic: ${label}] `
                        )
                      }
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-gray-900/80 hover:bg-gray-900 border border-gray-700/80 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/50 transition cursor-pointer"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your thoughts about GameHub, request new game listings, or say hello..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                    <span>Direct Creator Channel via WhatsApp</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <FaPaperPlane />
                    <span>Send Note via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Project Attribution Footer
        <footer className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black text-[11px] font-black shadow-md">
              MS
            </div>
            <span>
              Engineered with passion by{" "}
              <a
                href="https://msabbirhossen.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-400 hover:text-cyan-300 transition underline"
              >
                MS Hossen
              </a>{" "}
              (@sabb1rhossen / @parttimecoder)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500">
            <span>Online Game Library • GameHub</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default MeetDeveloper;