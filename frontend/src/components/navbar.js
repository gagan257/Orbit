import React from "react";
import logo from "../Images/orbit-logo.png";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link hover-underline-animation"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-underline-animation" href="/">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-underline-animation" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-underline-animation" href="/">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
