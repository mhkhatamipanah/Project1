import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Banner from "./components/Banner/Banner";
import Film from "./components/Film/Film";

import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";

export default function MainRouter() {
  const [isloading, setIsloading] = useState(false);
  
  
  useEffect(() => {
    setIsloading(!isloading);
  }, []);
  return (
    <>
      {isloading ? <Navbar /> : <Preloader />}

      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/film" element={<Film />} />
        <Route path="/Banner" element={<Banner />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
