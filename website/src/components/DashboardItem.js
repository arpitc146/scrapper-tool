import React from "react";
import { BsQuestionOctagon, BsCheck, BsTruck } from "react-icons/bs";
export const DashboardItem = (props) => {
  return (
    <div className="container-fluid p-3 mt-2">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {props.arr.map((item) => {
          return (
            <div key={item.id} class="accordion-item">
              <h2 class="accordion-header" id={"flush-heading" + item.id}>
                <button
                  class="accordion-button collapsed row"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapse" + item.id}
                  aria-expanded="false"
                  aria-controls={"flush-collapseOne" + item.id}
                >
                  <span className="col fw-bold">
                    <span
                      className={
                        item.status === "Success"
                          ? "text-success"
                          : item.status === "Unresolved"
                          ? "text-danger"
                          : "text-primary"
                      }
                    >
                      {item.status == "Success" ? (
                        <BsCheck className="me-2" />
                      ) : item.status == "Unresolved" ? (
                        <BsQuestionOctagon className="me-2" />
                      ) : (
                        <BsTruck className="me-2" />
                      )}
                      {item.status}
                    </span>
                  </span>
                  <span className="col">
                    {item.startDate} -&gt;
                    {item.endDate}
                  </span>
                  <span className="text-muted col">{item.trackingId}</span>
                </button>
              </h2>
              <div
                id={"flush-collapse" + item.id}
                class="accordion-collapse collapse"
                aria-labelledby={"flush-heading" + item.id}
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body row g-3">
                  <span className="col-12">Shipper: {item.handler}</span>
                  <span className="col-6">Manufacturer: {item.start}</span>
                  <span className="col-6">Retailer: {item.end}</span>
                  <span className="col-6">Start date: {item.startDate}</span>
                  <span className="col-6">Delivery date: {item.endDate}</span>
                  {item.breakpoint.length !== 0 ? (
                    <span className="col-12">
                      Point of mishap: <code>{item.breakpoint}</code>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
