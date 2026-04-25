import React from "react";
import Marquee from "react-fast-marquee";

const Developers = () => {
  const developers = [
    "Epic Games",
    "Supercell",
    "Krafton",
    "HoYoverse",
    "Innersloth",
    "Mojang",
    "Garena",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
    
    {/* Heading */}
    <h3 className="text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
      Featured Developers
    </h3>

    {/* Marquee */}
    <Marquee
      gradient={true}
      gradientColor={[75, 85, 99]} // matches gray-600/700 tone
      speed={45}
      delay={1}
      pauseOnHover={true}
    >
      <div className="flex gap-10">
        {developers.map((dev, idx) => (
          <div
            key={idx}
            className="group relative w-44 h-10 flex items-center justify-center rounded-lg overflow-hidden cursor-pointer"
          >
            {/* subtle neon glow (only on hover) */}
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

            {/* card */}
            <div className="relative z-10 w-full h-10 bg-black/30 backdrop-blur-sm border border-gray-400/20 rounded-lg flex items-center justify-center transition duration-300 group-hover:scale-105  mr-10">
              <span className="text-base font-semibold text-black group-hover:text-cyan-300 transition">
                {dev}
              </span>
            </div>

            {/* neon edge */}
            <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cyan-400/40 transition duration-300"></div>
          </div>
        ))}
      </div>
    </Marquee>
  </div>
  );
};

export default Developers;
