import React, { Component } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="hero-banner video-studio overly-6"
          id="mainBanner-section"
        >
          <div className="video-background">
            <video autoPlay muted loop src="/video/promo-video.mp4" />
          </div>

          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="main-banner-content">
                      <h1>قناة النيل الفضائيه</h1>

                      <p>
                        تم تأسيس قناة النيل الأزرق الفضائية في العام 2003م،
                        وقامت رؤيتها على إبراز الهوية والثقافة السودانية عبر
                        قوالب إبداعية لوضع الثقافة السودانية في سباق الحداثة وقد
                        استطاعت قناة النيل الأزرق الفضائية أن تشكل حضوراً فاعلاً
                        في خارطة المشاهدة داخلياً وخارجياً ، متبعة في ذلك منهج
                        اعلامي متوازن لتكمل الرسالة الاعلامية وتحقق الاستمرار
                        والحضارة والريادة.
                      </p>
                      <p className="mb-2">و أحد أبرز برامج القناه: </p>
                      <ul className="p-0 px-3">
                        <li className="text-white">صباح pn</li>
                        <li className="text-white">مساء جديد</li>
                        <li className="text-white">حوار مفتوح</li>
                        <li className="text-white">ألو مرحبا</li>
                      </ul>

                      {/* <Link href="/contact">
                        <a className="btn btn-primary">Contact Us</a>
                      </Link> */}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="video-box">
                      <Link href="#play-video">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          className="video-btn"
                        >
                          <i className="pe-7s-play d-flex-center"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default MainBanner;
