import "../Home/Header.css";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../../Assets/images/17.jpg";
import image11 from "../../Assets/images/10.jpg";
import image2 from "../../Assets/images/16.jpg";
import image22 from "../../Assets/images/11.jpg";
import image3 from "../../Assets/images/15.jpg";
import image33 from "../../Assets/images/12.jpg";

import React from "react";



function Header() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
      <picture className="d-block w-100 h-500">
          <img src={image1} alt="download metamask" media="(min-width: 1024px)" />
          <source  srcSet={image11} type="image/img"  />
        </picture>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <picture className="d-block w-100 h-500">
          <img src={image2} alt="download metamask" media="(min-width: 1024px)" />
          <source  srcSet={image22} type="image/img"  />
        </picture>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <picture className="d-block w-100 h-500">
          <img src={image3} alt="download metamask" media="(min-width: 1024px)" />
          <source  srcSet={image33} type="image/img"  />
        </picture>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
