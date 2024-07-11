import React from "react";
import { Hero_Slider, Hero_Section } from "../../index";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-div  relative w-full h-full">
        <Hero_Slider></Hero_Slider>
        <Hero_Section></Hero_Section>
      </div>
      
    </>
  );
};

export default Hero;
