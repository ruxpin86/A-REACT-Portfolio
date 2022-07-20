import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar(props) {
  console.log(props);
  return (
    <nav>
      <div>
        <h1>Ted Glynn</h1>
      </div>
      <div className="navlinks">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/about">
          About Me
        </NavLink>
        <NavLink exact activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink exact activeClassName="active" to="/resume">
          Resume
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>
      {/* <NavLink to="/">Resume</NavLink> */}
    </nav>
  );
}
