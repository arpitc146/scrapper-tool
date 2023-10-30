import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileContract, FaConnectdevelop } from "react-icons/fa";
import landing from "./assets/landing.gif";
export const Landing = () => {
  return (
    <div className="container-fluid">
      <div class="row" style={{ minHeight: "100vh" }}>
        <div class="col-lg-5 col-md-6 p-5">
          <div className="d-flex justify-content-center align-self-center flex-column h-100">
            <h2 className="text-success">
              “Connecting blocks for a secure future”
            </h2>
            <p style={{ textAlign: "justify" }}>
              Welcome to our website, where we provide you insights on effective
              supply chain management strategies. Supply chain management is a
              critical component of any business, as it involves the
              coordination and management of all activities involved in the
              production and delivery of goods and services. At our website, we
              offer valuable resources and guidance to help businesses optimize
              their supply chain operations and achieve their goals in today's
              competitive marketplace.
            </p>
            <div class="d-flex pt-5 pb-3" style={{ overflow: "hidden" }}>
              <input
                type="email"
                class="form-control h-100 w-75"
                placeholder="Email"
                aria-label="email"
              />
              <button className="btn btn-success w-25 text-nowrap">
                Connect
              </button>
            </div>
            <div class="container mt-5">
              <center class="row fs-4">
                <a href="#" class="col-4 p-1 d-flex flex-column">
                  <SiBlockchaindotcom className="ms-auto me-auto"></SiBlockchaindotcom>
                  Blockchain
                </a>
                <a href="#" class="col-4 p-1 d-flex flex-column">
                  <FaFileContract className="ms-auto me-auto"></FaFileContract>
                  IOT
                </a>
                <a href="#" class="col-4 p-1 d-flex flex-column">
                  <FaConnectdevelop className="ms-auto me-auto"></FaConnectdevelop>
                  Dashboard
                </a>
              </center>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 ">
          <center>
            <img src={landing} className="img-fluid"></img>
          </center>
        </div>
      </div>
    </div>
  );
};
