import React from "react";
import News from "./News";
import Header from "./Header";
import Banner from "../Banner/Banner";
import MainSwiper from "./Swipeable_Carousel/MainSwiper";
import "../Home/Home.css";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
      <div className="container-header">
        <div className="header">
          <div className="header-Tab">
            <Header />
          </div>
          <div className="news">
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
          </div>
        </div>
      </div>
      <Banner />
      <MainSwiper />
      <Footer/>
      
    </>
  );
}

export default Home;
