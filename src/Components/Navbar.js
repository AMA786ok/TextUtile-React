import React from "react";

import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
    <header id="header">
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
              <a className="navbar-brand" href="#">
                <h2>{props.title}</h2>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-5">
                  <li className="nav-item text-dark">
                    <a className="nav-a" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-a" href="/about">About</a>
                  </li>
                  <li>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                <div className={`form-check text-${props.mode=== "light"?"dark": "light"} form-switch mt-2 mx-2`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                  </div>
                  <div className={`form-check text-${props.mode=== "light"?"dark": "light"} form-switch mx-2 mt-2`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode1} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable blue Mode</label>
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
  title : PropTypes.string.isRequired,
  about : PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title : "Set Title Here",
  about : "About text Here"
};