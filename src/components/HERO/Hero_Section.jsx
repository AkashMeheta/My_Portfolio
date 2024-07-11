import React from "react";

const Hero_Section = () => {
  return (
    <>
      <div class="hero-section">
        <div class="bottle">
          <div class="hero-div sec-a font-inconsolata">
            <div class="left-child">
              <h3>4.4</h3>
              <h3>2002</h3>
            </div>
            <div class="right-child">
              <h3>KOLKATA</h3>
              <h3>CREATIVE</h3>
            </div>
            <div></div>
          </div>
          <div class="hero-div sec-b font-oswald">
            <div class="main-text">
              HELLO, I AM{" "}
              <span class="">
                <i class=" smily fa-regular fa-face-smile"></i>
              </span>
            </div>
            <div class="main-text">
              AKASH MEHETA{" "}
              <span>
              <i class="fa-sharp fa-solid fa-arrow-right fa-flip"></i>
              </span>{" "}
              I'M A CREATIVE
            </div>
            <div class="main-text">
              FULL-STACK{" "}
              <span>
                <i class=" wink fa-regular fa-face-smile-wink"></i>
              </span>{" "}
              WEB DEVELOPER
            </div>
          </div>
          <div class="hero-div sec-c font-inconsolata">
            <div class="sub-text">
              <h4>
                A passionate FULL-STACK Web Developer with a knack for creating
                seamless and dynamic web applications. With a strong foundation
                in both FRONT-END and BACK-END technologies, I thrive on
                challenges and continuously strive to push the boundaries of web
                development.
              </h4>
            </div>
          </div>
          <div class="hero-div sec-d font-pp_Neue_Montreal">
            <div class="button-div">
              <button class="button bg-black">Contact Me</button>
              <button class="button bg-white">Check My Resume</button>
            </div>
          </div>
          <div class="hero-div sec-e font-inconsolata">
            <div class="social-handels">
              <h3>Instagram</h3>
              <h3>Linkdin</h3>
              <h3>Github</h3>
            </div>
            <div class="scroll-down">
              <div>Scroll Down</div>
              <div>
                <i class="fa-solid fa-arrow-down"></i>
              </div>
            </div>
            <div class="signature">Akash Meheta</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
