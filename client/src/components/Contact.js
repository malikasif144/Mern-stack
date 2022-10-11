import React from "react";
import Mobile from "../images/mobile.png";
import Email from "../images/email.png";
import Map from "../images/map.png";

function Contact() {
  return (
    <div>
      <div className="row justify-content-around ">
        <div className="col-12 col-sm-3 d-flex shadow p-3 mb-5 bg-body rounded m-4">
          <div>
            <img
              src={Mobile}
              alt="/"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div>
            <h5>Phones</h5>
            <p>0392817264176</p>
          </div>
        </div>
        <div className="col-12 col-sm-3 d-flex shadow p-3 mb-5 bg-body rounded m-4">
          <div>
            <img
              src={Email}
              alt="/"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div>
            <h5>Email</h5>
            <p>admin@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-sm-3 d-flex shadow p-3 mb-5 bg-body rounded m-4">
          <div>
            <img src={Map} alt="/" style={{ width: "30px", height: "30px" }} />
          </div>
          <div>
            <h5>Address</h5>
            <p>Iqbal avenue lahore</p>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center  ">
        <div className="shadow p-3 mb-5 bg-body rounded">
          <h1>Get In Touch</h1>
          <form className="d-flex justify-content-around">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone number"
                id="phone number"
                autoComplete="off"
                placeholder="Your Phone"
              />
            </div>
          </form>
          <button type="submit" class="btn btn-primary mt-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
