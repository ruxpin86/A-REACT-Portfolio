import React from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  console.log(props);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to="/">Resume</Link> */}
    </nav>
  );
}
