import React from "react";

import "./Styles/Banner.css";

import banner from "../../Assets/row-banner.png";
import bannerImg1 from "../../Assets/banner-1.png";
import bannerImg2 from "../../Assets/banner-2.png";
import bannerImg3 from "../../Assets/banner-3.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="row-banner">
        <div className="content">
          <span>double cheese</span>
          <h3>burger</h3>
          <p>with cococola and fries</p>
          <button className="btn">order now</button>
        </div>

        <img src={banner} alt="" />
      </div>

      <div className="grid-banner">
        <div className="grid">
          <img src={bannerImg3} alt="" />
          <div className="content left">
            <span>limited offer</span>
            <h3>100% cashback</h3>
            <button className="btn">order now</button>
          </div>
        </div>
        <div className="grid">
          <img src={bannerImg2} alt="" />
          <div className="content center">
            <span>special offer</span>
            <h3>upto 25% extra</h3>
            <button className="btn">order now</button>
          </div>
        </div>

        <div className="grid">
          <img src={bannerImg1} alt="" />
          <div className="content right">
            <span>special offer</span>
            <h3>upto 50% off</h3>
            <button className="btn">order now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
