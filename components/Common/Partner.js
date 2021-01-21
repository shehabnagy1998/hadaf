import React, { Component } from "react";
import Link from "next/link";
import { API } from "../../helper/CONST";
import removePublic from "../../helper/removePublic";

class Partner extends Component {
  render() {
    const { galleryData } = this.props;
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
            {galleryData.length >= 1 &&
              galleryData.map((item, i) => (
                <div
                  className="col-lg-3 col-md-4 my-3"
                  style={{ height: "300px" }}
                >
                  <div className="single-partner w-100 h-100">
                    {item.image && (
                      <img
                        src={`${API}${removePublic(item.image)}`}
                        alt="image"
                        className="h-100 w-100"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
