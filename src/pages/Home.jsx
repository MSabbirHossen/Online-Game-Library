import React, { useState, useEffect } from "react";

import Newsletter from "../components/Newsletter/Newsletter";
import CTA from "../components/CtA/CtA";
import Developers from "../components/Developers/Developers";
import PopularGames from "../components/PopularGames/PopularGames";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <PopularGames />
      <Developers />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default Home;
