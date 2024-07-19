import CertificateStyle from "./Certification.module.css";
import React from "react";
import Logo1 from "../../../images/logo.png";
import Img1 from "../../../images/client-logo-index.png";
import Call from "../../../images/call-now.gif";
import What from "../../../images/WhatsApp_Icon_greens.png";

function Certification() {
  const list = [
    "HOME",
    "ABOUT US",
    "COURSES",
    "CAREERS",
    "TESTIMONIALS",
    "CONTACT US",
  ];

  return (
    <div>
      <div className={CertificateStyle.background}></div>
      <div className={CertificateStyle.background2}>
        <img src={Call} />
        <img src={What} className={CertificateStyle.what} />
      </div>
      <div className={CertificateStyle.background3}>
        <div className={CertificateStyle.text1}>
          <p>COURSES</p>
        </div>
        <div className={CertificateStyle.text2}>
          <marquee behavior="" direction="left">
            "Call us for course fees and attractive discounts"
          </marquee>
        </div>

        <div className={CertificateStyle.contain}>
          <div className={CertificateStyle.backleft}>
            <div className={CertificateStyle.text3}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> ORACLE
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Read More</li>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text4}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> ISTQB certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text5}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Scrum Master Certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text6}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> PMP Certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text7}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> CAPM certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text8}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> ITIL certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text9}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> CBAP certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text10}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> CCBA certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text11}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Network+ certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text12}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> A+ certification
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text13}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> ASTQB Certified Mobile Tester
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text14}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SALESFORCE
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text15}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Robotic Process Automation
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text16}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Internet of Things (IoT)
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text17}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Ionic
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text18}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Data Science
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text19}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> DevOps
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text20}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Microsoft Azure Training
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text21}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> DATA WAREHOUSING
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text22}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SAS
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text23}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> DATASTAGE
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text24}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> FORMS AND REPORTS
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text25}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> PERFORMANCE TUNNING
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text26}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SOFTWARE TESTING
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text27}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> JAVA / J2EE
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text28}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> DOT NET
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text29}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> PHP
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text30}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> UNIX
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text31}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SHELL SCRIPTING and PERL SCRIPTING
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text32}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SELENIUM
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text33}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> QlikView
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text34}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SAP ABAP
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text35}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SAP FICO
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text36}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> TALEND
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text37}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> PEGA
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text38}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> TIBCO
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text39}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Adobe CQ5
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text40}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> MATLAB
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text41}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> INFORMIX
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text42}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SHELL SCRIPTING and PERL SCRIPTING
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text43}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> SELENIUM
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text44}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Analytics Training In Chennai
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text45}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> PERVASIVE
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text46}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> ADEPTIA
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text47}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> LINUX Training in Chennai
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text48}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Virtualization Training in Chennai
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text49}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Advance Excel Training and Macro Training using VBA
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text50}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Workday
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text51}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> TOGAF
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text52}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Blue Prism
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text53}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Automation Anywhere
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text54}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> UiPath
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text55}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> OpenSpan
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>


            <div className={CertificateStyle.text56}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Blockchain
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>

            <div className={CertificateStyle.text57}>
              <div className={CertificateStyle.left}>
                <h2>
                  <i class="fa-solid fa-caret-right"></i> Foreign Languages
                </h2>
              </div>
              <div className={CertificateStyle.right}>
                <ul>
                  <li>Course Content</li>
                </ul>
              </div>
            </div>



          </div>
          <div className={CertificateStyle.backright}>

            <div className={CertificateStyle.first}>
              <h4>Testimonials</h4>
              <p>Greens the best UNIX training in chennai. I did my UNIX training in Greens adyar.Srinivasan is the best trainee in city..if u ask me...Because I've been to many institutes before and got down...I was actually trying to change my career in UNIX..And he helped me through as I succeeded.</p>
            </div>
            <div className={CertificateStyle.second}>
              <p>Greens Technologys,<br />No.15 First Street,Padmanabha nagar,<br />Adyar,<br />Chennai-20.</p>
            <h6>Phone(M): +91 89399 15572</h6>
            <span>eMail: contact@greenstechnologys.com</span>

            </div>
          </div>
        </div>
        <h6>Copyright © 2013 greenstechnologys.com. All Rights Reserved. <span>Privacy Policy</span></h6>
      </div>
      <div className={CertificateStyle.back}>
        <div className={CertificateStyle.top}>
          <img src={Logo1} />
          <div className={CertificateStyle.Img2}>
            <img src={Img1} />
          </div>
        </div>
        <div className={CertificateStyle.bar}>
          <ul>
            {list &&
              list.map((value, index) => {
                return (
                  <React.Fragment>
                    <a href="#">{value}</a>
                  </React.Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certification;
