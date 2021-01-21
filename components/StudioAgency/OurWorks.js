import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { API } from "../../helper/CONST";
import removePublic from "../../helper/removePublic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 20,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1800: {
      items: 5,
    },
  },
};

class OurWorks extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { partnerData } = this.props;
    return (
      <section
        className="case-studies-area ptb-100"
        style={{ direction: "ltr" }}
        id="partners-section"
      >
        <div className="container">
          <div className="section-title mb-1">
            <h2
              className="text-center mb-3"
              style={{
                color: "#0092d5",
              }}
            >
              شركائنا
            </h2>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className="work-slides owl-carousel owl-theme"
              {...options}
            >
              {partnerData.length >= 1 &&
                partnerData.map((item, i) => (
                  <div
                    key={i}
                    className="work-card m-0"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "150px",
                    }}
                  >
                    {item.image && (
                      <img
                        style={{ width: "100%", maxHeight: "100%" }}
                        src={`${API}${removePublic(item.image)}`}
                        alt="image"
                      />
                    )}
                  </div>
                ))}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default OurWorks;
