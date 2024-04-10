import React from "react";
import FrontCarousel from "../components/FrontCarousel";
import Store from "../components/Store";
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
