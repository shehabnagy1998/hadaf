import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <section className="about-area ptb-100" id="about-section">
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
                  <h4>تاريخ افتتاح وإغلاق المسابقة:</h4>
                  <p>
                    يُفتح باب التسجيل في المسابقة اعتباراً من تاريخ الاعلان عنها
                    في قناة النيل الازرق الفضائية ولغاية يوم سحب الجائزة
                    "الكبرى" من كل شهر ميلادي، أو الجوائز الأسبوعية الخاصة
                    بمواقع التواصل الاجتماعي المرتبطة بالمسابقة
                  </p>
                </div>

                <div className="about-text">
                  <h4>المشاركة في المسابقة:</h4>
                  <p>
                    المسابقة متاحة لجميع السودانيين وغيرهم من المشتركين من جميع
                    أنحاء العالم والبالغين سن الرشد بحسب قوانين جمهورية السودان
                    ويراعى الاستثناء حسب الشروط والأحكام
                  </p>
                  <p>
                    يتم بث أربعة حلقات شهرية خاصة بالمسابقة على النحو التالي:
                  </p>
                  <ul className="p-0 px-2" style={{ listStyle: "inside" }}>
                    <li>حلقة رئيسة شهرية للمشاركين عبر الأرقام القصيرة</li>
                    <li>
                      ثلاث حلقات فرعية أسبوعية للمشاركين عبر مواقع التواصل
                      الاجتماعي الخاصة بالمسابقة
                    </li>
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
