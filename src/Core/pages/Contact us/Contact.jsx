import React from "react";
import ContactStyle from "./Contact.module.css";
import Logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import Call from "../../../images/call-now.gif";
import What from "../../../images/WhatsApp_Icon_greens.png";

function Contact() {
  return (
    <div>
      <div className={ContactStyle.topnav}>
        <p>
          <i class="fas fa-location-dot"></i> Chennai
        </p>
        <p>
          <i class="fas fa-phone"></i>+91- 8939915578
          <i class="fas fa-envelope"></i> contact@greenstechnologys.com
        </p>
      </div>
      <div className={ContactStyle.bottomnav}>
        <div className={ContactStyle.left}>
          <img src={Logo} />
        </div>
        <div className={ContactStyle.right}>
          <ul>
            <li>
              <Link to="/home" className={ContactStyle.link}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={ContactStyle.link}>About Us</Link>
            </li>
            <li>
              <Link to="/course" className={ContactStyle.link}>Courses <i className="fas fa-angle-down"></i></Link>
            </li>
            <li>
              <Link to="/review" className={ContactStyle.link}>Reviews <i className="fas fa-angle-down"></i></Link>
            </li>
            <li>
              <Link to="/careers" className={ContactStyle.link}>Careers</Link>
            </li>
            <li>
              <Link to="/galary" className={ContactStyle.link}>Gallery</Link>
            </li>
            <li>
              <Link to="/blogs" className={ContactStyle.link}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" className={ContactStyle.link}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={ContactStyle.main}>
        <h1>Our Main Branches In Chennai</h1>
        <img src={Call} className={ContactStyle.call} />
        <img src={What} className={ContactStyle.what} />
        <div className={ContactStyle.gridcontainer}>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
        </div>

        <h1>Other District Branches</h1>

        <div className={ContactStyle.gridcontainer2}>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid1}>
            <i class="fas fa-house"></i>
            <p>
              <span>
                Greens Technologys In <br />
                Adyar
              </span>
            </p>
            <p>
              No.11, First Street, <br />
              Padmanabha Nagar,Adyar, <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>+91 72005 52296
            </p>
          </div>
          <div className={ContactStyle.grid2}></div>
          <div className={ContactStyle.grid2}></div>
        </div>
      </div>
      <div className={ContactStyle.formcontainer}>
        <div className={ContactStyle.left2}>
          <h1>
            Submit <span>Your Enquiry</span>{" "}
          </h1>
          <p>
            If you have a question that is specific to you, please complete the
            form below and a member of <br /> our training team will contact you
            shortly.
          </p>
          <div className={ContactStyle.top}>
            <div className={ContactStyle.grid3}>
              <h2>Head Office Address :</h2>
              <p>
                No. 11, First Street,
                <br />
                Padmanabha Nagar,Adyar,
                <br />
                Chennai-600 020.
              </p>
            </div>
            <div className={ContactStyle.grid3}>
              <h2>Email Address:</h2>
              <p>contact@greenstechnologys.com</p>
            </div>
            <div className={ContactStyle.grid3}>
              <h2>Phone :</h2>
              <p>Mobile : +91 7200552296</p>
            </div>
            <div className={ContactStyle.grid3}>
              <h2>Social Media :</h2>
              <p>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
              </p>
            </div>
          </div>
        </div>
        <div className={ContactStyle.right2}>
          <form>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="number" placeholder="Mobile Number" />
            <br />
            <input type="text" placeholder="Course" />
            <br />
            <input type="text" placeholder="Select The Branch" />
            <br />
            <input type="text" placeholder="Planing To Start Training" />
            <br />
            <textarea name="message" placeholder="Message*"></textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className={ContactStyle.mapsection}>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>

        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
        <div className={ContactStyle.map1}>
          <div className={ContactStyle.mapleft}>
            <iframe
              width="960px"
              height="310px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=960px&amp;height=310px&amp;hl=en&amp;q=No.11,%20First%20Street,%20%20%20%20%20%20%20Padmanabha%20Nagar,Adyar,%20%20%20%20%20%20%20Chennai-600%20020+(Adyar%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className={ContactStyle.mapright}>
            <h2>Adayar Branch</h2>
            <h3>Greens Technologys</h3>
            <p>
              <i class="fas fa-location-dot"></i>No.11, First Street,
              <br />
              Padmanabha Nagar,Adyar,
              <br />
              Chennai-600 020
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +91 72005 52296
            </p>
            <p>
              <i class="fas fa-envelope"></i>contact@greenstechnologys.com
            </p>
          </div>
        </div>
      </div>
      <div className={ContactStyle.footer11}>
        <div className={ContactStyle.gridcontainer11}>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> 19,
              <br />
              First Street,
              <br />
              Balamurugan Garden,
              <br />
              Rajiv Gandhi Salai, Thoraipakkam,
              <br />
              Chennai 600097
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
          <div className={ContactStyle.grid11}>
            <h6>
              Greens Technology <span>Adayar</span>
            </h6>
            <p>
              <i class="fas fa-envelope"></i> No:11,
              <br />
              First Street,
              <br />
              padmanabha Nagar,
              <br />
              Adyar,
              <br />
              Chennai-600 020.
            </p>
            <p>
              <i class="fas fa-phone"></i> +91 89399 15572
            </p>
            <p>
              <i class="fas fa-envelope"></i> contact@greenstechnologys.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
