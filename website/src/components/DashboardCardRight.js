import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { GrCompliance, GrAlert } from "react-icons/gr";

const DashboardCardRight = () => {
  return (
    <div className="container-fluid dashboard-card row">
      <div className="col text-light fw-bold">
        <div class="ripple">
          <BsArrowUpRight className="text-dark" />
        </div>
        <p className="ps-4 pt-2">9</p>
        <p className="ps-2">In transit</p>
      </div>
      <div className="col text-light fw-bold">
        <div class="ripple">
          <GrCompliance />
        </div>
        <p className="ps-4 pt-2">4</p>
        <p className="ps-2">Successfull</p>
      </div>
      <div className="col text-light fw-bold">
        <div class="ripple">
          <GrAlert />
        </div>
        <p className="ps-4 pt-2">4</p>
        <p className="ps-2">Unresolved</p>
      </div>
    </div>
  );
};

export default DashboardCardRight;
