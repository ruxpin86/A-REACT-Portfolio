import React from "react";
import useMediaQuery from "../lib/useMediaQuery";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  console.log(props);
  const isMobile = useMediaQuery("max-width: 902px");
  return isMobile ? (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%" }}>
        <h1>Ted Glynn</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
        className="navlinks"
        // style={{ background: isMobile ? "green" : "red" }}
      >
        <NavLink exact activeClassName="active" to="/">
          Home Mobile
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
    </nav>
  ) : (
    <nav>
      <div>
        <h1>Ted Glynn</h1>
      </div>
      <div
        className="navlinks"
        // style={{ background: isMobile ? "green" : "red" }}
      >
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
    </nav>
  );
}
