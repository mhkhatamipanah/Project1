import "./Motherly.css";
import React from "react";
import CardMotherly from "./CardMotherly";
import Pagation from "./Pagation";
import Footer from "../Footer/Footer";
import { Carousel} from './carousel-1/Carousel'

function Motherly() {
  return (
    <>
      <div className="container-Mothely ">
        <div className="container-Mothely-news">
          <h3 className="title-Mothely"> مادرانه</h3>
          <div className="grid">
            <CardMotherly />
            <CardMotherly />
            <CardMotherly />
            <CardMotherly />
            <CardMotherly />
            <CardMotherly />
            <CardMotherly />
            <Pagation />
          </div>
        </div>
        <aside className="aside-Mothely"><Carousel/></aside>
      </div>
      <Footer />
    </>
  );
}

export default Motherly;
