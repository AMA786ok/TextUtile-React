import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <header id="header">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container">
            <Link className="navbar-brand" to="#">
              <h2>{props.title}</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-5">
                <li className="nav-item text-dark">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li></li>
              </ul>
              <ul className="navbar-nav ms-auto">
               
                className="bg-warning rounded mt-2"
                 
                <div
                  className={`form-check text-${
                    props.mode === "light" ? "dark" : "light"
                  } form-switch mt-2 mx-2`}
                > 
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleMode}
                    my={props.toggleMode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Enable Dark Mode
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  about: "About text Here",
};
