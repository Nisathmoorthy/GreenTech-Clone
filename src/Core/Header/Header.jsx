import React from "react";
import HeaderStyle from "./Header.module.css"
import Call from "../../images/call-now.gif"
import What from "../../images/WhatsApp_Icon_greens.png"
import Logo from "../../images/logo.png"
import Img from "../../images/client-logo-index.png"
import icon1 from "../../images/facebook_icon.png"
import icon2 from "../../images/twitter_icon.png"
import banner1 from "../../images/banner_1.jpg"
import Down from "../../images/dmca-badge-w100-2x1-02.png";
import Video2 from "../../images/video/greenstechnologies-siruseri-branch.mp4"
import Video3 from "../../images/video/greenstechnologies-video.mp4"
import Query from "../../images/query.jpg.jpg"
import { Link } from "react-router-dom";


function Header(){



    return <div>
        <div className={HeaderStyle.background}>
        </div>
        <div className={HeaderStyle.background2}>
        <img src={Call} className={HeaderStyle.call}/>
        <img src={What} className={HeaderStyle.what}/>
        </div>
        <div className={HeaderStyle.background3}></div>


        <div className={HeaderStyle.back}>
        <div className={HeaderStyle.top}>
                <img src={Logo}/>
                <div className={HeaderStyle.Img2}>
                <img src={Img} />
                </div>
            </div>
            <div className={HeaderStyle.bar}>
                <ul>
                    <li className="a"><Link to="/home">HOME</Link></li>
                    <li className="a"><Link to="/certification">Certifications</Link></li>
                    <li className="a"><a href="#">COURSES  </a>
                    <div className={HeaderStyle.dropmenu1}>
                        <ul>
                            <li><a href="#">UI/UX Training</a></li>
                            <li><a href="#">PMP Training</a></li>
                            <li><a href="#">RCM Training</a></li>
                            <li><a href="#">Service Now Training</a></li>
                            <li><a href="#">Digital Marketing Training</a></li>
                            <li><a href="#">VMWARE Training</a></li>
                            <li><a href="#">Data Engineering Training</a></li>
                            <li><a href="#">ETL Testing Training</a></li>
                            <li><a href="#">Graphical Design Training</a></li>
                            <li><a href="#">mobile-app-development-training</a></li>
                            <li><a href="#">Snowflake Training</a></li>
                            <li><a href="#">DevSecOps Training</a></li>
                            <li><a href="#">Scrum Master Training</a></li>
                            <li><a href="#">Azure Training</a></li>
                            <li><a href="#">mobile-app-development-training</a></li>
                            <li><a href="#">Google Cloud Platform(GCP)</a></li>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Selenium</a></li>
                            <li><a href="#">AWS Training</a></li>
                            <li><a href="#">Bigdata Training</a></li>
                        </ul>

                    </div>
                    </li>
                    <li className="a"><Link to="/online">Online Course</Link>
                    <div className={HeaderStyle.dropmenu2}>
                        <ul>
                            <li><a href="#">Azure Training</a></li>
                            <li><a href="#">Google Cloud Platform(GCP)</a></li>
                            <li><a href="#">Software Testing</a></li>
                            <li><a href="#">Selenium</a></li>
                            <li><a href="#">Data Analytics</a></li>
                            <li><a href="#">Full Stack Developer</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">AWS</a></li>
                            <li><a href="#">Devops Engineer</a></li>
                            <li><a href="#">Data Scientist</a></li>
                            <li><a href="#">Bigdata Architect Training</a></li>
                            <li><a href="#">DevSecOps Training</a></li>
                            <li><a href="#">Machine Learning Engineer</a></li>
                            <li><a href="#">Test Automation Engineer</a></li>
                            <li><a href="#">Business Intelligence</a></li>
                        </ul>

                    </div></li>
                    <li className="a"><Link to="/master">Master Program</Link>
                    <div className={HeaderStyle.dropmenu3}>
                        <ul>
                            <li><a href="#">Data Analytics</a></li>
                            <li><a href="#">Full Stack Developer</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Cloud Architect</a></li>
                            <li><a href="#">Devops Engineer</a></li>
                            <li><a href="#">Data Scientist</a></li>
                            <li><a href="#">Bigdata Architect Training</a></li>
                            <li><a href="#">Machine Learning Engineer</a></li>
                            <li><a href="#">Test Automation Engineer</a></li>
                            <li><a href="#">Business Intelligence</a></li>
                        </ul>

                    </div></li>
                    <li className="a"><Link to="/contact">CONTACT US</Link></li>
                    <li className="a"><Link to="/hostel">HOSTEL</Link></li>
                    <li className="a"><Link to="/job">Job Vacancy</Link></li>
                </ul>
            </div>
            <div className={HeaderStyle.bar2}>
                <p>For Franchise Opportunities At Banglore</p>
                <img src={icon1}/>
                <img src={icon2}/>
            </div>
            <div className={HeaderStyle.banner}>
                <img src={banner1} />
            </div>
        </div>


        <div className={HeaderStyle.back1}>

        <div className={HeaderStyle.barquee}>
          <marquee behavior="" direction="left">
            "Call us for course fees and attractive discounts"
          </marquee>
        </div>


        <div className={HeaderStyle.rii}>
          <div className={HeaderStyle.contentleft}>
            <div className={HeaderStyle.text1}>
              <h2>
                No 1 Software Training Institutes in Chennai with Placements
              </h2>
            </div>
            <div className={HeaderStyle.text2}>
              <p>
                <b>Greens Technology</b> in ADYAR offers best software training
                and placement exclusively on{" "}
                <span className={HeaderStyle.bule}>
                  Python, Oracle, Selenium, Amazon Web Services(AWS), Data
                  Warehouse, Java, Sharepoint, Software Testing, Informatica,
                  Blockchain, Dot Net, Oracle DBA, Hadoop, SAS, R Language,
                  Tableau, Power BI, Xamarin, Node.js, ReactJS, UNIX SHELL
                  Scripting,
                </span>{" "}
                C and C++, and more to the students.
              </p>
            </div>
            <div className={HeaderStyle.text3}>
              <p>
                <b>Greens Technology</b> is a leading Training and Placements
                company in Chennai. We are known for our practical approach
                towards trainings that enable students to gain real-time
                exposure on competitive technologies. Trainings are offered by
                employees from MNCs to give a real corporate exposure.
              </p>
            </div>
            <div className={HeaderStyle.text4}>
              <p>
                We at Greens Technology have been in IT industry for nearly{" "}
                <b>
                  10 years, providing Training, Consultancy and Development
                  solutions in{" "}
                  <span className={HeaderStyle.red}>
                    emerging technologies like
                  </span>{" "}
                  <span className={HeaderStyle.bule}>
                    Big Data DevOps, AWS, Python, Robotic Process Automation,
                    Internet of things
                  </span>
                </b>
              </p>
            </div>
            <div className={HeaderStyle.text5}>
              <p>
                We undertake{" "}
                <b>
                  Classroom Training, Corporate Training and Video Based
                  Training
                </b>{" "}
                on latest Technologies on latest versions. We make sure that all
                our sessions are very much interactive and well structured. We
                encourage every participant to come up with his / her own
                queries during & after the training sessions. We prefer
                practical approach rather than theoretical information to master
                the technical depth of the technology. We provide excellent Lab
                Handouts for practice including Realtime Case Studies and
                Projects on ALL courses. Specific <b>DAY to DAY Course Plan</b>{" "}
                will also be shared prior to training registration to ensure
                transparency of our Training services.
              </p>
            </div>
            <div className={HeaderStyle.text6}>
              <p>
                Our Trainings are focused on perfect improvement of technical
                skills for Freshers and working professional. Our Training
                classes are sure to help the trainee with{" "}
                <b>COMPLETE PRACTICAL TRAINING </b>and Realtime methodologies.
              </p>
            </div>
            <div className={HeaderStyle.text7}>
              <p>
                Greens Technologys Software Training Centers in <br />
                Chennai
              </p>
            </div>

            <div className={HeaderStyle.box1}>
              <h2>Greens Technology Adyar</h2>
              <p>
                <b>
                  11 First Street Padmanabha Nagar,
                  <br />
                  Adyar,
                  <br />
                  Chennai
                </b>
              </p>
              <p>
                Tel: <span>+91- 7200552296</span>
              </p>
            </div>

            <div className={HeaderStyle.box2}>
              <h2>Greens Technology Tambaram</h2>
              <p>
                <b>
                  No.1, Appa Rao colony,
                  <br />
                  Tambaram,Sanatorium,
                  <br />
                  Chennai - 600047. <br />
                  Landmark: Opposite of Sri Rama Anjaneyar Temple,
                  <br />
                  Near HP Petrol Bunk.
                </b>
              </p>
              <p>
                Tel: <span>+91- 75501 66012</span>
              </p>
            </div>

            <div className={HeaderStyle.box3}>
              <h2>Greens Technology OMR (Head Office)</h2>
              <p>
                <b>
                  19, Balamurugan Garden,
                  <br />
                  Rajiv Gandhi Salai,
                  <br />
                  Thoraipakkam,
                  <br />
                  Chennai 600097 <br />
                  Landmark: Opp to Geetham Restaurant.
                </b>
              </p>
              <p>
                Tel: <span>+91- 8939975577</span>
              </p>
            </div>

            <div className={HeaderStyle.box4}>
              <h2>Greens Technologies Navalur</h2>
              <p>
                <b>
                  No: 12, Rajiv Gandhi Salai(OMR),
                  <br />
                  Egattur Village, Navalur,
                  <br />
                  (Just Before Navalur Tollgate),
                  <br />
                  Chennai-600 035.
                </b>
              </p>
              <p>
                Tel: <span>+91- 89399 75514</span>
              </p>
            </div>

            <div className={HeaderStyle.box5}>
              <h2>Greens Technology Porur</h2>
              <p>
                <b>
                  149, 1C/1D, 1st Floor,
                  <br />
                  Opp to DLF IT Park,
                  <br />
                  Ramapuram,
                  <br />
                  Chennai - 600089.
                </b>
              </p>
              <p>
                Tel: <span>+91- 89399 15572</span>
              </p>
            </div>
            <div className={HeaderStyle.box6}>
              <h2>Greens Technology Perumbakkam</h2>
              <p>
                <b>
                  1st Floor, Plot No. 19 &20,
                  <br />
                  American Advent Christian Layout,
                  <br />
                  Sholinganallur to Medavakkam Main Road,
                  <br />
                  Perumbakkam,(next to OMR food street )
                  <br />
                  Chennai - 600 100.
                </b>
              </p>
              <p>
                Tel: <span>+91 89399 82138</span>
              </p>
            </div>
            <div className={HeaderStyle.box7}>
              <h2>Greens Technology Anna Nagar</h2>
              <p>
                <b>
                  Ground floor,
                  <br />
                  New No. W-41,
                  <br />
                  Old No.W122, 3rd Ave,
                  <br />
                  W Block, Anna Nagar,
                  <br />
                  Chennai, 600040 <br />
                </b>
              </p>
              <p>
                Tel: <span> +91 8939982022</span>
              </p>
            </div>
            <div className={HeaderStyle.box8}>
              <h2>Greens Technology Tambaram</h2>
              <p>
                <b>
                  No. 05, Bakthavachalam Street,
                  <br />
                  OWest Tambaram,
                  <br />
                  Chennai - 600045.
                </b>
              </p>
              <p>
                Tel: <span>+91 8939975577</span>
              </p>
            </div>
            <div className={HeaderStyle.box9}>
              <h2>Greens Technology Velachery</h2>
              <p>
                <b>
                  51-A, 2nd floor,
                  <br />
                  Velachery Road,
                  <br />
                  Dhadeswaram Nagar,
                  <br />
                  Velachery, Chennai,
                  <br />
                  Tamil Nadu 600042.
                </b>
              </p>
              <p>
                Tel: <span>+91 8939975576</span>
              </p>
            </div>
            <div className={HeaderStyle.box10}>
              <h2>Greens Technology Vadapalani</h2>
              <p>
                <b>
                  79, 100 Feet Rd,
                  <br />
                  Thiru Nagar Colony,
                  <br />
                  Vadapalani,
                  <br />
                  Chennai,
                  <br />
                  Tamil Nadu 600026.
                </b>
              </p>
              <p>
                Tel: <span> +91 8939915525</span>
              </p>
            </div>
            <div className={HeaderStyle.box11}>
              <h2>Greens Technology Perungudi</h2>
              <p>
                <b>
                  3rd floor ,G square ,
                  <br />
                  Opp to DLF IT Park,
                  <br />
                  No 46 Rajiv Gandhi salai ( OMR),
                  <br />
                  Perungudi,
                  <br />
                  Chennai 600 096.
                </b>
              </p>
              <p>
                Tel: <span> +91 8939975577</span>
              </p>
            </div>
            <div className={HeaderStyle.box12}>
              <h2>Greens Technology Avadi</h2>
              <p>
                <b>
                  New no. 398, Old no. 577,
                  <br />
                  CTH Road, Avadi Checkpost,
                  <br />
                  Avadi,
                  <br />
                  Tamil Nadu - 600054.
                </b>
              </p>
              <p>
                Tel: <span> +91 91500 59981</span>
              </p>
            </div>
            <div className={HeaderStyle.box13}>
              <h2>Greens Technology Mugalivakkam </h2>
              <p>
                <b>
                  No:01,
                  <br />
                  Adithi Colony,
                  <br />
                  Mugalivakkam MainRoad,
                  <br />
                  Mugalivakkam, Porur ,
                  <br />
                  Chennai 600116.
                </b>
              </p>
              <p>
                Tel: <span> +91 8939915572</span>
              </p>
            </div>
            <div className={HeaderStyle.box14}>
              <h2>Greens Technology Mount Road</h2>
              <p>
                <b>
                  162, Second Floor,
                  <br />
                  Anna Salai,
                  <br />
                  Express Estate,
                  <br />
                  Triplicane, Chennai,
                  <br />
                  Tamil Nadu - 600002
                </b>
              </p>
              <p>
                Tel: <span> +91 8939975525</span>
              </p>
            </div>
            <div className={HeaderStyle.box15}>
              <h2>Greens Technology Kolathur</h2>
              <p>
                <b>
                  No : 7, 2nd Floor,
                  <br />
                  Perambur Paper mills Road
                  <br />
                  Kolathur,
                  <br />
                  Chennai - 600099.
                </b>
              </p>
              <p>
                Tel: <span> +91 8939982198</span>
              </p>
            </div>
            <div className={HeaderStyle.box16}>
              <h2>Greens Technology T Nagar</h2>
              <p>
                <b>
                  160,
                  <br />
                  North Usman Road,
                  <br />
                  TNagar,
                  <br />
                  Chennai 600017
                </b>
              </p>
              <p>
                Tel: <span> +91 8939975577</span>
              </p>
            </div>
            <div className={HeaderStyle.text18}>
              <p>Greens Technologys Software Training Center in Trichy</p>
            </div>

            <div className={HeaderStyle.box17}>
              <h2>Greens Technology Trichy</h2>
              <p>
                <b>
                  75/E-3, Sri Krishna Enclave,
                  <br />
                  2nd Floor, Salai Road,
                  <br />
                  Thillai Nagar,
                  <br />
                  Tiruchirappalli, Tamil Nadu 620 018 .
                  <br />
                  Landmark : Next to kannappa Hotel
                </b>
              </p>
              <p>
                Tel: <span>+91 8939915597</span>
              </p>
            </div>

            <div className={HeaderStyle.text19}>
              <p>Greens Technologys Software Training Center in Salem</p>
            </div>

            <div className={HeaderStyle.box18}>
              <h2>Greens Technology Salem</h2>
              <p>
                <b>
                  2nd Floor,
                  <br />
                  2nd Floor, Salai Road,
                  <br />
                  Sri Sai Kamatchi Complex,
                  <br />
                  Vincent,
                  <br />
                  Salem - 636007.
                </b>
              </p>
              <p>
                Tel: <span> +91 8939902300</span>
              </p>
            </div>
          </div>
          
          <div>
            <div className={HeaderStyle.contentright}>
              <div className={HeaderStyle.video1}>
              <iframe width="240" height="200" src="https://www.youtube.com/embed/ytqbpfoqGSA?si=skCL3E8W_DYGYwp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className={HeaderStyle.video2}>
              <video controls src={Video3} width="260px" height="140px"></video>
              </div>
              <div className={HeaderStyle.video3}>
              <video controls src={Video2} width="260px" height="140px"></video>
              </div>

              <div className={HeaderStyle.query}>
                <img src={Query}/>
              </div>
            </div>
          </div>

        </div>
        <div className={HeaderStyle.copy}>
              <p>
                Copyright © 2019 greenstechnologys.com. All Rights Reserved.{" "}
                <span>Privacy Policy</span>
                <img src={Down} className={HeaderStyle.image}/>
              </p>
            </div>

        </div>

    </div>
}
export default Header