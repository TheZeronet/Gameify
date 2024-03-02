import React from "react";
import BigGallery from "../components/BigGallery";
import Choose from "../components/Choose";
import FrontCarousel from "../components/FrontCarousel";

import Girl from "../components/Girl";
import Pricing from "../components/Pricing";
import Store from "../components/Store";
import "../styles/LandingPage.css";
import Body from "./body";

const LandingPage = () => {
  return (
    <div>
      {/* <Body /> */}
      <FrontCarousel />
      <Store />
      {/* <Choose /> */}
    </div>
  );
};

export default LandingPage;
