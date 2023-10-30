import React from "react";
import logo from "./assets/logo.png";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light p-3" id="home">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logo" width="100" height="50" />
            </a>
            <span>OG_DEVS</span>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
          <div>
            <a href="#footer">
              <button className="btn btn-dark ms-3">Login</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
