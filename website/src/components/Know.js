import React from "react";

export const Know = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row g-3">
        <span className="col-md-3 col-sm-4 fs-2">
          Everything you Need to Know
        </span>
        <div className="col-md-3 col-sm-4" style={{ overflow: "hidden" }}>
          <a href="https://aws.amazon.com/blockchain/blockchain-for-supply-chain-track-and-trace/#:~:text=With%20blockchain%2C%20supply%20chain%20companies,at%20any%20point%20in%20time.">
            <img
              className="img-thumbnail"
              src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
            ></img>
          </a>
        </div>
        <div className="col-md-3 col-sm-4" style={{ overflow: "hidden" }}>
          <a href="https://www.detego.com/retail_insights_en/retail-en/rfid_supply_chain/#:~:text=How%20is%20RFID%20used%20in,finally%20sent%20out%20to%20stores.">
            <img
              className="img-thumbnail"
              src="https://cdn.mikroe.com/knowlegebase/uploads/2016/11/04175029/rfid.jpg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
