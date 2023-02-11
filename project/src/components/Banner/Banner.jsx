import React from "react";
import image from "../../Assets/images/3.jpg";
import "../Banner/Banner.css";

function Banner() {
  return (
    <>
      <div className="container-banner">
        <img className="image-banner" src={image} alt="" />
        <img className="image-banner" src={image} alt="" />
      </div>
    </>
  );
}

export default Banner;
