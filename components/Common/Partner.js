import React, { Component } from "react";
import Link from "next/link";

class Partner extends Component {
  render() {
    return (
      <section className="partner-area py-5">
        <div className="container">
          {/* <div className="section-title">
            <h2>Trusted By</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}

          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/egypt1.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/sudan1.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/egypt2.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/sudan2.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/egypt3.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/sudan3.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/egypt4.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 my-3" style={{ height: "300px" }}>
              <div className="single-partner w-100 h-100">
                <img
                  src="/imgs/sudan4.jpg"
                  alt="image"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
