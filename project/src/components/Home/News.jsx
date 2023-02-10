import React from "react";
import image from "../../Assets/images/2.png";
import "../Home/News.css";
import { Placeholder } from "react-bootstrap";

function News() {
  return (
    <div className="flex-container">
      <div className="news-img">
        <img src={image} alt="" />
      </div>
      <div className="news-text">
        <p >اخبار جدید</p>
        <p aria-hidden="true">
          <Placeholder xs={12} bg="primary" />
        </p>
      </div>
    </div>
  );
}

export default News;
