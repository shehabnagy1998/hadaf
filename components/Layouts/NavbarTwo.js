import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

import Scrollspy from "react-scrollspy";

class NavbarTwo extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area navbar-style-2">
          <nav
            className="navbar navbar-expand-md navbar-light"
            id="navbar-section"
          >
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/imgs/logo.png" className="black-logo" alt="logo" />
                  <img src="/imgs/logo.png" className="white-logo" alt="logo" />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <Scrollspy
                  className="navbar-nav"
                  items={[
                    "mainBanner-section",
                    "desired-section",
                    "partners-section",
                    "about-section",
                    "news-section",
                  ]}
                  currentClassName="is-current"
                >
                  <li className="nav-item">
                    <Link href="#mainBanner-section">
                      <a className="nav-link">النيل الفضائيه</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#desired-section">
                      <a className="nav-link">غايتنا</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#partners-section">
                      <a className="nav-link">شركائنا</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#about-section">
                      <a className="nav-link">حول المسابقه</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#news-section">
                      <a className="nav-link">أخر الأخبار</a>
                    </Link>
                  </li>
                </Scrollspy>

                {/* <div className="others-options">
                  <Link href="/pricing">
                    <a className="btn btn-primary">Let's Begin</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavbarTwo;
