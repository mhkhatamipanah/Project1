import React from "react";
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div>
      <Link to="/home">Home </Link>

      <Link to="/about">About Us </Link>

      <Link to="/Banner">Banner</Link>
    </div>
  );
}

export default navbar;
