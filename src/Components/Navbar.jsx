import React, {useState, useEffect } from "react";

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-light fixed-top">
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
            <a href="#heroSection" className="nav-link">
                Profile
              </a>
            </li>
            <li className="nav-item">
            <a href="#educationSection" className="nav-link">
                Education
              </a>
            </li>
            <li className="nav-item">
            <a href="#skillsSection" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projectsSection" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item last-item">
              <a href="#contactSection" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
