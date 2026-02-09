import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="left">J S Manikanta&apos;s Portfolio</div>

        <div className="right">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
