import React from "react";
import "./about_me.css";

const About_me = () => {
  return (
    <>
      <div className="about_me  w-full h-[100vh] flex justify-center items-center flex-col">
        <div className="wrapper relative w-fit h-fit">
          <div class="about-div  flex justify-center items-center h-auto">
            <p class="Continuous absolute font-inconsolata">
              <span>Continuous</span>
              <br />
              <span>Learning</span>
            </p>
            <p class="Adaptability absolute font-inconsolata">Adaptability</p>
            <p class="Teamworker absolute font-inconsolata">Team Worker</p>
            <p class="Communication absolute font-inconsolata">Communication</p>

            <h1 class="about font-oswald"> ABOUT ME</h1>
          </div>
          <div class="scroll-down hidden md:block absolute">
              <div>Scroll Down</div>
              <div>
                <i class="fa-solid fa-arrow-down"></i>
              </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default About_me;
