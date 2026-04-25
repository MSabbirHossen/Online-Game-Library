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
    <section className="relative py-16 overflow-hidden bg-gray-900">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* subtle glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-white tracking-wide">
          Featured <span className="text-cyan-400">Developers</span>
        </h3>

        {/* Marquee */}
        <Marquee
          gradient={true}
          gradientColor={[17, 24, 39]} // gray-900
          speed={150}
          pauseOnHover={true}
        >
          <div className="flex gap-12">
            {developers.map((dev, idx) => (
              <div
                key={idx}
                className="group relative w-48 h-24 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer mr-15"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 mr-15"></div>

                {/* card */}
                <div className="relative z-10 w-full h-full bg-black/40 backdrop-blur-md border border-gray-700/40 rounded-xl flex items-center justify-center transition duration-300 group-hover:scale-105">
                  <span className="text-lg font-semi bold text-gray-200 group-hover:text-cyan-300 transition">
                    {dev}
                  </span>
                </div>

                {/* neon border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/50 transition duration-300"></div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Developers;
