import React from "react";
import "./assets/b.css";
const DashboardCard = () => {
  return (
    <div className="container dashboard-card">
      <div className="row">
        <div className="col-3 text-end">
          <span>1</span>
        </div>
        <div className="col-9 text-light">Delivery today</div>
      </div>
      <div className="text-light p-5">
        Customers dont measure on how hard you tried, they measure you on what
        you deliver
      </div>
    </div>
  );
};

export default DashboardCard;
