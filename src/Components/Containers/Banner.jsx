import React from "react";

import "./Styles/Banner.css";

import banner from "../../Assets/row-banner.png";
import bannerImg1 from "../../Assets/banner-1.png";
import bannerImg2 from "../../Assets/banner-2.png";
import bannerImg3 from "../../Assets/banner-3.png";
import BannerCard from "./BannerCard";

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
        <BannerCard
          img={bannerImg3}
          title="special offer"
          body="upto 50% off"
          align="left"
        />
        <BannerCard
          img={bannerImg2}
          title="special offer"
          body="upto 50% off"
          align="center"
        />
        <BannerCard
          img={bannerImg1}
          title="special offer"
          body="upto 50% off"
          align="right"
        />
      </div>
    </section>
  );
};

export default Banner;
