import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
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
    return (
      <section
        className="case-studies-area ptb-100"
        style={{ direction: "ltr" }}
        id="partners-section"
      >
        <div className="container">
          <div className="section-title mb-1">
            <h2
              className="text-center mb-1"
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
              <div className="work-card m-0">
                <img src="/imgs/brand1.png" alt="image" />

                {/* <div className="content text-center">
                  <span>
                    <Link href="#">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
                </div> */}
              </div>
              <div className="work-card m-0">
                <img src="/imgs/brand2.png" alt="image" />

                {/* <div className="content text-center">
                  <span>
                    <Link href="#">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
                </div> */}
              </div>
              <div className="work-card m-0">
                <img src="/imgs/brand3.png" alt="image" />

                {/* <div className="content text-center">
                  <span>
                    <Link href="#">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
                </div> */}
              </div>
              <div className="work-card m-0">
                <img src="/imgs/brand4.png" alt="image" />

                {/* <div className="content text-center">
                  <span>
                    <Link href="#">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
                </div> */}
              </div>
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
