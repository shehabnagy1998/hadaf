import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        الجائزة الشهرية الخاصة بالمشتركين عبر الأرقام القصيرة
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        1. يتم إيضاح طرق المشاركة على شاشة قناة النيل الأزرق
                        وموقع المسابقة الإلكتروني وعلى وسائل التواصل الاجتماعي
                        الخاصة بالمسابقة
                      </p>
                      <p>
                        2. فترة السحب الأول للجائزة الشهرية لمسابقة "هدف" تبدأ
                        من بداية الاعلان عن المسابقة وتنتهي عند بث الحلقة الأولى
                        الخاصة بالسحب الشهري
                      </p>
                      <p>
                        3. فترة السحب لباقي مراحل المسابقة للجائزة الشهرية تبدأ
                        من أول يوم بعد آخر سحب تم إجرائه وتنتهي عند بث الحلقة
                        الخاصة بالسحب شهرياً
                      </p>
                      <p>
                        4. يتم اختيار الفائز من خلال شاشة السحب، وسيقوم فريق عمل
                        البرنامج بالتواصل مع الفائز وتسليمه الجائزة في الحلقة
                        التالية
                      </p>
                      <p>
                        5. إذا لم يجيب المشترك الذي يتم الاتصال به خلال البرنامج
                        من قبل قناة النيل الأزرق يعلن اسمه ويتواصل لاحقاً مع
                        إدارة القناة والبرامج (برنامج هدف لاستلام الجائزة) على
                        الرقم المعلن على الشاشة
                      </p>
                      <p>
                        6. يتم سحب اسم الفائز الكامل من خلال رقم الهاتف الذي
                        أرسل من عبره البيانات
                      </p>
                      <p>
                        7. في كل سحب سوف يتم اختيار فائز واحد، على انه لا يمكن
                        للمشترك الواحد أن يربح أكثر من مرة واحدة خلال المسابقة
                      </p>
                      <p>
                        8. سيتم إعلان اسم الفائزين من خلال برنامج "هدف"، ولاحقاً
                        من خلال موقع المسابقة الإلكتروني وحسابات التواصل
                        الاجتماعي الخاصة بالمسابقة، وكافة الوسائل الاعلانية
                        الأخرى التي تراها قناة النيل الأزرق الفضائية مناسبة
                      </p>
                      <p>
                        9. في حال فوز أي مشترك فانه سيتم حجب اسمه ورقمه من
                        السحوبات التالية على انه لا يجوز للفائز الربح بالمسابقة
                        مرة أخرى، ولو من رقم هاتف آخر
                      </p>
                      <p>
                        10. الجوائز شهرية وسيحصل الفائز الرئيسي على (مبلغ مالي
                        بالجنيه السوداني)، أو (جائزة عينية يحددها المنظمون)
                      </p>
                      <p>
                        11. يحق لأي مشترك لم يحالفه الحظ في المشاركة مجدداً في
                        السحب اللاحق، عبر إرسال كلمة "هدف" أو (ه) إلى الرقم
                        المختصر لبلده، على انه ينتقل رصيده من المراحل التي جمعها
                        سابقا لتضاف على مجموع المراحل التي جمعها للسحب اللاحق
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        الجوائز المتعلقة بالمشتركين عبر مواقع التواصل الاجتماعي
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        1. يتم ايضاح آلية المشاركة عبر شاشة قناة النيل الأزرق
                        الفضائية والموقع الالكتروني، وحسابات التواصل الاجتماعي
                        الخاصة بالمسابقة، وأي وسائل اعلانية أخرى
                      </p>
                      <p>
                        2. يتم اختيار فائز أو أكثر أسبوعياً حسب آلية الفرز
                        والاختيار المتبعة
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        آلية تسليم الجائزة للفائز
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        1. سيتلقى الفائز اتصالاً هاتفيا من المنظمين بعد أيام
                        قليلة من الإعلان المباشر عن الفائزين بالجوائز، وذلك لطلب
                        الوثائق الرسمية اللازمة والتي تثبت هوية الفائز
                      </p>
                      <p>
                        2. سيستغرق تسليم الجائزة للفائزين 30 يوماً من تاريخ
                        إعلان اسم الفائز
                      </p>
                      <p>
                        3. الفائز مسؤول بشكل مطلق عن تزويد المنظمين بالبيانات
                        الشخصية الصحيحة وفي حال وجود أي خطأ أو نقص في هذه
                        البيانات، فان المنظم غير مسؤول عن عدم تسليم أو التأخير
                        في تسليم الجائزة للفائز
                      </p>
                      <p>
                        4. يقبل الفائز توثيق استلامه للجائزة وعرض صورته على
                        الوسائل الاعلانية الخاصة بالمنظمين أو أي وسيلة اعلانية
                        أخرى
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>مقدِم الجائزة</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        تقدم الجوائز الخاصة بمسابقة هدف من قبل الرعاة والمعلنون
                        المشاركون في المسابقة عبر شاشة قناة النيل الأزرق
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>أحكام عامة</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        1. في حال انتهاء المسابقة سيقوم المنظمون بالنشر على
                        الموقع الرسمي الخاص بالمسابقة وهو www.hadafbntv.com بأن
                        المسابقة قد انتهت
                      </p>
                      <p>
                        2. الانقطاع أو الإنهاء المبكر للمسابقة لن يكون مانعاً
                        للمنظمين من التزامهم بإعطاء الجوائز التي فاز بها
                        متسابقون بالفعل وتنفيذ الإجراءات الأخرى المطلوبة،
                        وتستثنى من ذلك الحالات التي يكون فيها الانقطاع أو انتهاء
                        المسابقة ناتجة عن أحداث خارجة عن سيطرة منظمي المسابقة
                      </p>
                      <p>
                        3. تُطبق هذه الشروط والأحكام "الأحكام والشروط الخاصة
                        بنا" على مسابقة هدف
                      </p>
                      <p>
                        4. عليك الاطلاع على موقعنا الالكتروني بشكل منتظم لمتابعة
                        أية تغييرات يتم اعتمادها اعتباراً من تاريخ تحميلها على
                        الموقع
                      </p>
                      <p>
                        5. عبر دخولك في مسابقة "هدف" فإنك توافق على الالتزام
                        بهذه الشروط العامة وأية شروط خاصة مطبقة
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>إنهاء المسابقة</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-white p-3">
                      <p>
                        من الممكن أن نقوم بتعديل الشروط الخاصة بالمسابقة، أو
                        إنهائها في أي وقت وفق محض اختيارنا دون تحمل أية مسؤولية
                        تجاه أي متسابقين أو أي شخص آخر. لا نقوم بتقديم أية جوائز
                        في حال إنهاء أية مسابقة
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-img">
                <img src="/images/faq-img.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
