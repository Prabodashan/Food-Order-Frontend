import React from "react";
import "./Styles/About.css";

import aboutImage from "../../Assets/about-img.png";
import aboutImage1 from "../../Assets/serv-1.png";
import aboutImage2 from "../../Assets/serv-2.png";
import aboutImage3 from "../../Assets/serv-3.png";
import aboutImage4 from "../../Assets/serv-4.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={aboutImage} alt="" />
      </div>

      <div className="content">
        <span>why choose us?</span>
        <h3 className="title">what's make our food delicious!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?
        </p>
        <a href="#btn" className="btn">
          read more
        </a>
        <div className="icons-container">
          <div className="icons">
            <img src={aboutImage1} alt="" />
            <h3>fast delivery</h3>
          </div>
          <div className="icons">
            <img src={aboutImage2} alt="" />
            <h3>fresh food</h3>
          </div>
          <div className="icons">
            <img src={aboutImage3} alt="" />
            <h3>best quality</h3>
          </div>
          <div className="icons">
            <img src={aboutImage4} alt="" />
            <h3>24/7 support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
