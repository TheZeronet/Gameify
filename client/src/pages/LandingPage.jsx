import React from "react";
import FrontCarousel from "./monu/components/FrontCarousel";
import Store from "./monu/components/Store";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <FrontCarousel />
      <Store />
    </div>
  );
};

export default LandingPage;
