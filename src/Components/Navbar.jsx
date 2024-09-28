import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Gireeswar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
          aria-controls="mynav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynav">
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "blueviolet" : "black",
                })}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/education"
                style={({ isActive }) => ({
                  color: isActive ? "blueviolet" : "black",
                })}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/skills"
                style={({ isActive }) => ({
                  color: isActive ? "blueviolet" : "black",
                })}
              >Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                style={({ isActive }) => ({
                  color: isActive ? "blueviolet" : "black",
                })}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item last-item">
            <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "blueviolet" : "black",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
