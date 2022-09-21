import React from "react";
import "./Styles/Hero.css";

import heroImg from "../../Assets/home-img.png";
import heroParallaxImg from "../../Assets/home-parallax-img.png";

const Hero = () => {
  return (
    <section class="hero" id="home">
      <div class="content">
        <span>welcome foodies</span>
        <h3>different spices for the different tastes 😋</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          dolores temporibus hic quam debitis tenetur harum nemo.
        </p>
        <a href="#btn" class="btn">
          order now
        </a>
      </div>

      <div class="image">
        <img src={heroImg} alt="" class="hero-img" />
        <img src={heroParallaxImg} alt="" class="hero-parallax-img" />
      </div>
    </section>
  );
};

export default Hero;
