import OnlineStyle from "./Onlinecourses.module.css";
import Logo from "../../../images/logo.png";
import Call from "../../../images/call-now.gif";
import What from "../../../images/WhatsApp_Icon_greens.png";
import Advance from "../../../images/Advanced-Excel-Training.png";
import Android from "../../../images/android.png";
import AWS from "../../../images/AWS-Training-Chennai.png";
import Cplus from "../../../images/c-c-plus-plus.png";
import DotNet from "../../../images/dot-Net-logo.png";
import Hadoop from "../../../images/Hadoop-Training-in-chennai.png";
import Placement from "../../../images/greens-technology-placement-process.jpg"
import Location from "../../../images/Robotic-Process-Automation.png"
import { Link } from "react-router-dom";

function Online() {
  return (
    <div>
      <div>
        <img src={Call} className={OnlineStyle.call} />
        <img src={What} className={OnlineStyle.what} />
      </div>
      <div className={OnlineStyle.menubar}>
        <div className={OnlineStyle.leftText}>
          <p>10% Discount on All Courses</p>
        </div>
        <div className={OnlineStyle.rightText}>
          <p>+91 89399 15572</p>
        </div>
      </div>
      <div className={OnlineStyle.menubar2}>
        <ul>
          <li>
            <img src={Logo} />
          </li>
          <li>
            <a href="#">
              <button className={OnlineStyle.button1}>Courses</button>
            </a>
          </li>
          <li>
            <a href="#">Corporate Training</a>
          </li>
          <li>
            <a href="#">All Courses</a>
          </li>
          <li>
            <a href="#">All Branches</a>
          </li>
          <li>
          <Link to="/contact"><button className={OnlineStyle.button2}>CONTACT US</button></Link>     
          </li>
        </ul>
      </div>
      <div className={OnlineStyle.para2}>
        <h2>Greens Technology Offered Courses</h2>
        <p>
          Greens Technology Institute offers a wide range of{" "}
          <b>Software Training and Placement in Chennai</b> of varied nature.
          Long –term, Short –term, Refresher or Follow- up courses and
          <br />
          programs are being offered. We ascertain that the syllabus and
          curriculum of each course is well mapped with the requirements of the
          IT employers. The following are some the
          <br /> principal courses offered by us.
        </p>
      </div>

      <div className={OnlineStyle.gridcontainer22}>
        <div className={OnlineStyle.gridd1}>
          <img src={Advance} />
          <p>Workday Training</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Android} />
          <p>Android</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={AWS} />
          <p>AWS</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Cplus} />
          <p>CC++</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={DotNet} />
          <p>.Net</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Hadoop} />
          <p>Big Data Hadoop</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Advance} />
          <p>Workday Training</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Android} />
          <p>Android</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={AWS} />
          <p>AWS</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Cplus} />
          <p>CC++</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={DotNet} />
          <p>.Net</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Hadoop} />
          <p>Big Data Hadoop</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Advance} />
          <p>Workday Training</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Android} />
          <p>Android</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={AWS} />
          <p>AWS</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Cplus} />
          <p>CC++</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={DotNet} />
          <p>.Net</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Hadoop} />
          <p>Big Data Hadoop</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Advance} />
          <p>Workday Training</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Android} />
          <p>Android</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={AWS} />
          <p>AWS</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Cplus} />
          <p>CC++</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={DotNet} />
          <p>.Net</p>
        </div>
        <div className={OnlineStyle.gridd1}>
          <img src={Hadoop} />
          <p>Big Data Hadoop</p>
        </div>
      </div>

      <div className={OnlineStyle.secondContainer}>
        <div className={OnlineStyle.content1}>
          <h3>
            Why Greens Technology is the Best Software Training Institute in
            <br />
            Chennai..?
          </h3>
          <p>
            Numerous IT Training Institutes in Chennai have cropped up and
            mushroomed in no time by the wink of an eye, and choosing the best
            among them becomes the greatest challenge. Challenging this
            challenge by being at Greens Technology can give one more confidence
            and hope. We have a curriculum covering all aspects of employability
            and a persistent placement <br /> assistance is provided at tier one IT
            companies, MNC business giants and top-level CMM companies. Greens
            Technology institute simply empowers and allows an individual to
            secure a <br /> position within the corporate atmosphere.
          </p>
          <div className={OnlineStyle.gridcontainer33}>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
            <div className={OnlineStyle.griditem33}>
              <img src={Location}/>
              <h6>65,000+ Students Placed</h6>
              <p>We proudly acclaim that we have placed over 65000 students in our 20 years of legacy in the industry

</p>
            </div>
          </div>
        </div>
      </div>
      <div className={OnlineStyle.thirdContainer}>
        <div className={OnlineStyle.content}>
          <h3>
          HOW WE WORK
          </h3>
          <p>
            More than thirty world-class trainers who possess global
            certification are engaged in providing best software training
            institute in chennai with placement at Greens Technology. <br />The Course
            module is tailor made (ranging from the basic topics to the advanced
            level concepts) based on the caliber and the competency of <br />each
            student. A simulated real time exposure of executing and
            troubleshooting IT relevant tasks are made to experiment by the
            learning professionals. <br /> Our exceptional infrastructure with
            outstanding lab facilities will make the below learning process more
            fruitful and enjoyable.
          </p>
          <img src={Placement}/>
        </div>
      </div>

      <div className={OnlineStyle.footer}>
        <div className={OnlineStyle.gridcontainer}>
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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
          <div className={OnlineStyle.grid1}>
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

export default Online;
