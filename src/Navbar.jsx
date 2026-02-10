import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <NavLink to="/" className="left" onClick={() => setOpen(false)} >
          J S Manikanta 
        </NavLink>

        <div className="right">
          {/* Desktop links */}
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>

          {/* Mobile button */}
          <button className="menuBtn" onClick={() => setOpen((v) => !v)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobilePanel">
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={() => setOpen(false)}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setOpen(false)}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
