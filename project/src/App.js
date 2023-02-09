import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Banner from "./components/Banner/Banner";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export default function MainRouter() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/Banner" element={<Banner />} />
   
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
