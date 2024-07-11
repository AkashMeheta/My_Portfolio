import React, { useLayoutEffect } from "react";
import SplitType from "split-type";
import { easeInOut, motion } from "framer-motion";
import { gsap } from "gsap";

const Hero_Slider = () => {
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    const myText = new SplitType(".text");
    t1.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  const sliderVarients = {
    hidden: {
      y: 100,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    silde: {
      y: -window.innerHeight,
    },
    snapEffect: {},
  };

  return (
    <motion.div
      className="custom-h z-50 absolute flex justify-center items-center w-full bg-[#28282B]"
      initial={sliderVarients.visible}
      animate={sliderVarients.silde}
      transition={{ duration: 1, ease: easeInOut, delay: 3.2 }}
    >
      <h1 className="font-oswald text-5xl text-gray-200 text">Get comfy! Akash Mehta's work is on its way...</h1>
    </motion.div>
  );
};

export default Hero_Slider;
