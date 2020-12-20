import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about-img4.jpg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h4>عدم تنفيذ الأحكام والشروط:</h4>
                  <p>
                    إن عدم قدرتنا على تنفيذ أي من هذه الشروط والأحكام في أية
                    حالة (حالات) لا يؤدي إلى تقديم أية مطالبة أو يمنح الحق في
                    اتخاذ أي إجراء من قبل أي مشترك أو فائز، كما لا يعتبر تنازلاً
                    عن أي من حقوقنا بخصوصها
                  </p>
                </div>

                <div className="about-text">
                  <h4>استثناء المسؤولية:</h4>

                  <ul className="p-0 px-2" style={{ listStyle: "inside" }}>
                    <li>
                      باستثناء ما ينص عليه في هذه الشروط والأحكام على وجه الخصوص
                      وإلى الحد الأقصى الذي يجيزه القانون، فإن كافة الشروط
                      والتعهدات والالتزامات الواردة صراحةً أو ضمناً تعامل بموجب
                      القانون
                    </li>
                    <li>
                      باستثناء ما ينص عليه في هذه الشروط والأحكام على وجه الخصوص
                      وإلى الحد الأقصى الذي يجيزه القانون، فإن كافة الشروط
                      والتعهدات والالتزامات الواردة صراحةً أو ضمناً تعامل بموجب
                      القانون
                    </li>
                  </ul>
                </div>
                <div className="about-text">
                  <h4>القانـون:</h4>

                  <ul className="p-0 px-2" style={{ listStyle: "inside" }}>
                    <li>
                      تخضع هذه الشروط والأحكام (أو أية شروط خاصة) لقوانين
                      جمهورية السودان، محاكم السودان
                    </li>
                    <li>تُطبق الشروط والأحكام</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
