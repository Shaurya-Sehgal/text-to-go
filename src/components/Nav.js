import React, { useState } from "react";
import { Link } from "react-router-dom";
import Darkmode from "./dark_mode.svg";
import Lightmode from "./light_mode.svg";

function Nav(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.theme} border sticky-top border-${props.textTheme}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${props.textTheme}`}
            to="/text-to-go/"
          >
            Text-To-Go
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textTheme}`}
                  aria-current="page"
                  to="/text-to-go/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textTheme}`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textTheme}`}
                  aria-current="page"
                  to="/typingtest"
                >
                  Typing Test
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textTheme}`}
                  aria-current="page"
                  to="/statistics"
                >
                  Statistics
                </Link>
              </li>
            </ul>
            <a href="#">
              <img
                src={props.theme == "light" ? Darkmode : Lightmode}
                alt=""
                onClick={props.changeTheme}
                width={30}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Tooltip on bottom"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
