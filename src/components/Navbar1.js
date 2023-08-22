/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar1(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theam} bg-${props.theam}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1>{props.title}</h1>
          </Link>

          <button
            className="navbar-toggler"s
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="./Home">
                  {props.home}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="./About">
                  {props.about1}
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.theam === "light" ? "dark" : "light"
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.buttonName}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {props.switchName}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
