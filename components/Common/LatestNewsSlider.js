import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { API } from "../../helper/CONST";
import removePublic from "../../helper/removePublic";
import moment from "moment";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i className='pe-7s-angle-left'></i>",
    "<i className='icofont-thin-double-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class LatestNewsSlider extends Component {
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
    const { newsData } = this.props;
    return (
      <section className="blog-area ptb-100 bg-fcfbfb" id="news-section">
        <div className="container">
          <div className="section-title">
            <h2
              style={{
                color: "#0092d5",
              }}
            >
              أخر الاخبار
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row" style={{ direction: "ltr" }}>
            {this.state.display ? (
              <OwlCarousel
                className="blog-slides owl-carousel owl-theme"
                {...options}
              >
                {newsData.length >= 1 &&
                  newsData.map((item, i) => (
                    <div className="col-lg-12">
                      <div className="single-blog-item">
                        <div className="blog-image">
                          {/* <Link href="/blog-details">
                          <a>
                          </a>
                        </Link> */}
                          {item.image && (
                            <img
                              style={{ height: "400px", objectFit: "cover" }}
                              src={`${API}${removePublic(item.image)}`}
                              alt="image"
                            />
                          )}

                          <div className="post-tag">
                            <Link href="javascript:void()">
                              <a>{item.tag}</a>
                            </Link>
                          </div>
                        </div>

                        <div className="blog-post-content">
                          <span
                            className="date"
                            style={{ textTransform: "capitalize" }}
                          >
                            {moment(item.date).format("MMMM Do YYYY")}
                          </span>

                          <h3>
                            <a>{item.title}</a>
                          </h3>

                          <p>{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNewsSlider;
