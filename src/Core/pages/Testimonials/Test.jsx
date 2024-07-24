import React from "react";
import TestStyle from "./Test.module.css";
import Logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <div className={TestStyle.topnav}>
        <p>
          <i class="fas fa-location-dot"></i> Chennai
        </p>
        <p>
          <i class="fas fa-phone"></i>+91- 8939915578
          <i class="fas fa-envelope"></i> contact@greenstechnologys.com
        </p>
      </div>
      <div className={TestStyle.bottomnav}>
        <div className={TestStyle.left}>
          <img src={Logo} />
        </div>
        <div className={TestStyle.right}>
          <ul>
            <li>
              <Link to="/home" className={TestStyle.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={TestStyle.link}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/course" className={TestStyle.link}>
                Courses <i className="fas fa-angle-down"></i>
              </Link>
            </li>
            <li>
              <Link to="/review" className={TestStyle.link}>
                Reviews <i className="fas fa-angle-down"></i>
              </Link>
            </li>
            <li>
              <Link to="/careers" className={TestStyle.link}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/galary" className={TestStyle.link}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={TestStyle.link}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={TestStyle.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={TestStyle.bottomnav2}>
        <h1>REVIEWS & TESTIMONIALS</h1>
        <ul>
          <li>
            <Link to="/" className={TestStyle.link1}>
            Reviews
            </Link>
          </li>
          <li>Reviews & Testimonials</li>
        </ul>
      </div>

      <div className={TestStyle.main}>
        <h3>Greens Technology Reviews</h3>
        <h3>
          This page is dedicated for our Greens Technology Reviews and
          Testimonials by our students.
        </h3>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>
        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>

        <div className={TestStyle.testgrid1}>
          <div className={TestStyle.left1}></div>
          <div className={TestStyle.right1}></div>
        </div>
        <div className={TestStyle.circle}>
          <div className={TestStyle.circle1}></div>
          <div className={TestStyle.circle2}></div>
        </div>
      </div>

      <div className={TestStyle.footer22}>
        <div className={TestStyle.gridcontainer22}>
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
          <div className={TestStyle.grid22}>
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
export default Test;
