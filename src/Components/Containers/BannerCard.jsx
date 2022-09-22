import React from "react";

const BannerCard = ({ img, title, body, align }) => {
  return (
    <div className="grid">
      <img src={img} alt="" />
      <div
        className={
          align === "center"
            ? "content center"
            : align === "left"
            ? "content left"
            : "content right"
        }
      >
        <span>{title}</span>
        <h3>{body}</h3>
        <button className="btn">order now</button>
      </div>
    </div>
  );
};

export default BannerCard;
