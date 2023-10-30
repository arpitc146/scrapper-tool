import React from "react";
import { GiTechnoHeart, GiPlatform } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { CiBoxes } from "react-icons/ci";

import img1 from "./assets/img1.jpg";
const Services = () => {
  return (
    <div className="container-fluid p-2" id="services">
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div
            id="carouselExampleCaptions"
            class="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://cdn.shopify.com/s/files/1/1246/6441/files/How_RFID_works_chart.jpg?v=1633467215%0A"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.corporatefinanceinstitute.com/assets/supply-chain.jpeg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src={img1} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <h3>Impact on the future</h3>
          <p>
            Blockchain technology has the potential to revolutionize the supply
            chain industry by providing greater transparency, efficiency, and
            security. Some of the ways in which blockchain can impact the supply
            chain: <span className="makeItGreen">Improved Transparency</span>,
            <span className="makeItGreen">Enhanced Efficiency</span>,
            <span className="makeItGreen">Increased Security</span>,
            <span className="makeItGreen">Improved Traceability</span>,
            <span className="makeItGreen">Better Collaboration.</span>
            Overall, the impact of blockchain on the supply chain has the
            potential to be transformative, with benefits including increased
            efficiency, transparency, security, and collaboration. However,
            implementing blockchain technology can be complex and requires
            careful planning and collaboration among all parties involved in the
            supply chain.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <h3>What we serve</h3>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <FiLayers />
            </div>
            <div className="col-10">
              <h5>Platform</h5>
              <p>
                Integrating blockchain platforms / services into client’s
                applications and conducting workshops for identifying the pain
                points for end-to-end deployments
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <CiBoxes />
            </div>
            <div className="col-10">
              <h5>Blockchain Marketplace</h5>
              <p>To enable the implementation of blockchain smart contracts</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <GiTechnoHeart />
            </div>
            <div className="col-10">
              <h5>IOT</h5>
              <p>
                Enabling blockchain innovation in organizations using passive
                RFID to improve tracability and authenticity of product
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Tracability with Authenticity</h5>
              <p>
                Using RFID, inventry levels are scanned at each supplier to
                check their inventry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
