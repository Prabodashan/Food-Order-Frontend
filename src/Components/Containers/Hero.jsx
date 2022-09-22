import React from "react";
import "./Styles/Hero.css";

import heroImg from "../../Assets/home-img.png";
import heroParallaxImg from "../../Assets/home-parallax-img.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <span>welcome foodies</span>
        <h3>different spices for the different tastes 😋</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          dolores temporibus hic quam debitis tenetur harum nemo.
        </p>
        <a href="#btn" className="btn">
          order now
        </a>
      </div>

      <div className="image">
        <img src={heroImg} alt="" className="hero-img" />
        <img src={heroParallaxImg} alt="" className="hero-parallax-img" />
      </div>
    </section>
  );
};

export default Hero;
