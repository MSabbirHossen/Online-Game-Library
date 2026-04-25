import React, { useState, useEffect } from "react";

import Newsletter from "../components/Newsletter/Newsletter";
import CTA from "../components/CtA/CtA";
import Developers from "../components/Developers/Developers";
import PopularGames from "../components/PopularGames/PopularGames";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner / Slider */}
      <Banner />

      {/* Popular Games Section */}
      <PopularGames />

      {/* Featured Developers Marquee */}
      <Developers />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Call to Action */}
      <CTA />
    </div>
  );
};

export default Home;
