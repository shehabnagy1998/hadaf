import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <div className="bg-fcfbfb ptb-100 pb-60" id="desired-section">
        <div className="container">
          {/* <div className="section-title">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div> */}

          <div className="row">
            <div className="col-lg-4 col-sm-6 ">
              <div className="service-card-one white-bg border text-center">
                <i className="pe-7s-look bg-0092d5"></i>
                <h3 className="text-center">
                  <Link href="/service-details">
                    <a>الرؤيه</a>
                  </Link>
                </h3>
                <p>أن يكون برنامج هدف منصة للتعريف بالسودان ومقوماته</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg border text-center">
                <i className="pe-7s-target bg-0092d5"></i>
                <h3 className="text-center">
                  <Link href="/service-details">
                    <a>الاهداف</a>
                  </Link>
                </h3>
                <p>التعريف بمقومات السودان الاقتصادية والسياحية والاجتماعية</p>
                <p>
                  عمل أكبر تظاهرة للتعريف بالسودان عبر الصور الفوتوغرافية
                  والفيديو من خلال تفاعل الجماهيري عبر القناة ومواقع التواصل
                  الاجتماعي الخاصة بالمسابقة
                </p>
                <p>
                  تحقيق الريادة من خلال تقديم أُنموذج كأول شعب يعرف العالم
                  بوطنه.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg border text-center">
                <i className="pe-7s-rocket bg-0092d5"></i>
                <h3 className="text-center">
                  <Link href="/service-details">
                    <a>الرساله</a>
                  </Link>
                </h3>
                <p>التعريف بالسودان من خلال التفاعل الجماهيري عرب برنامج هدف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
