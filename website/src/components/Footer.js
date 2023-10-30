import "./assets/a.css";
import { SlCallIn } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiMailchimp, SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="c" data-aos="fade-in" id="footer">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Want Something?</h1>
          <div className="c-info fs-6">
            <div className="c-info-item">
              <SlCallIn className="me-2 fs-3" />
              <p>1800-266-3340 Timing: 24*7 (Everyday)</p>
              <p>1800-1022-666 Timing: 6am to 10pm</p>
              <p>1800-419-19216 Toll-free Timing: 6 am to 10 pm (Everyday)</p>
            </div>
            <div className="c-info-item">
              <SiMailchimp className="me-2 fs-3" />
              <p>reachus@ashokleyland.com</p>
              <p>secretarial@ashokleyland.com</p>
            </div>
            <div className="c-info-item">
              <SiGooglemaps className="me-2 fs-3" />
              <p>
                Delhi Ashok Leyland Ltd., Plot No. 76, Institutional Area, 4th
                Floor, Sector – 32, Gurgaon, Haryana – 122 001. Phone :
                0124-4629000 Fax : 0124-4629010
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" id="message">
            <b>Welcome</b> to our analytics dashboard
            <br />
            <form className="mt-3 p-3 border">
              <label htmlFor="username">
                <BiUser />
                <span className="fs-6">Enter username:</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
              />
              <label htmlFor="password">
                <RiLockPasswordLine />
                <span className="fs-6">Enter password:</span>
              </label>
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <center>
                <Link
                  className="btn btn-success btn-lg"
                  name="submit"
                  type="submit"
                  id="submitButton"
                  style={{ width: "fit-content" }}
                  to="dashboard"
                >
                  View Dashboard
                </Link>
              </center>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};
