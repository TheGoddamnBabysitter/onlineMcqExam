import React from "react";
import "../styles/style.css";
import "../styles/Packages/packages.css";
import "../styles/index/footer.css";
import mominsCareLogoV2Img from "../assets/MOMINS-CARE-LOGO-v2.png";
import ProfileUserImg from "../assets/profile-user.svg";
import tickSignImg from "../assets/packages/tick-sign.svg";
import BUETEnglogo from "../assets/eng-logos/1.png";

function Packages() {
  return (
    <>
      <a href="../index.html">Home - Momins Care (Back)</a>
      <section className="packages">
        <div className="Packages-header">
          <div className="packages-logo">
            <img src={mominsCareLogoV2Img} alt="" />
          </div>
          <a href="/">
            <div className="packages-my_acc">
              <img src={ProfileUserImg} alt="" />
              <span>My Account</span>
            </div>
          </a>
        </div>
        <div className="packages-sub-text">
          <p className="packages-sub-text-choose">
            Choose a plan which works best for you
          </p>
          <h3>
            <span className="H1">Our Best</span>
            <span className="H2"> Plan</span>
          </h3>
          <span className="y-Or-M">Yearly or monthy</span>
        </div>

        <div className="packages-card">
          <a href="../Pages/dashboard/dashboard-index.html">
            <div className="single-package-card">
              <p className="package-cat">Free</p>
              <h4 className="package-rate">Free / Month</h4>
              <p className="exam-amount">3 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>

          <a href="../Pages/payment page.html">
            <div className="single-package-card">
              <p className="package-cat">Paid</p>
              <h4 className="package-rate">500 TK / Month</h4>
              <p className="exam-amount">50 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>

          <a href="../Pages/payment page.html">
            <div className="single-package-card">
              <p className="package-cat">Paid</p>
              <h4 className="package-rate">500 TK / Month</h4>
              <p className="exam-amount">50 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>

          <a href="../Pages/payment page.html">
            <div className="single-package-card">
              <p className="package-cat">Paid</p>
              <h4 className="package-rate">500 TK / Month</h4>
              <p className="exam-amount">50 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>

          <a href="../Pages/payment page.html">
            <div className="single-package-card">
              <p className="package-cat">Paid</p>
              <h4 className="package-rate">500 TK / Month</h4>
              <p className="exam-amount">50 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>

          <a href="../Pages/payment page.html">
            <div className="single-package-card">
              <p className="package-cat">Paid</p>
              <h4 className="package-rate">500 TK / Month</h4>
              <p className="exam-amount">50 Exams</p>
              <button className="package-select">Select</button>
              <b>
                <p>Features :</p>
              </b>
              <ul>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>3 Engineering Admission-Focused Exams</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>Any subject or chapter</span>
                </li>
                <li>
                  <img src={tickSignImg} alt="" />
                  <span>lmited sedeuled Fixed time</span>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </section>
      <section className="exam-batch">
        <h4 className="exam-batch-heading">Special Premium Exam Batch</h4>
        <div className="exam-batch-packages">
          <div className="single-Exam-Batch">
            <div className="single-Exam-Batch-logo">
              <img src={BUETEnglogo} alt="" />
            </div>
            <div className="single-Exam-Batch-heading">BUET Exam Batch</div>
            <div className="single-Exam-Batch-details">
              <ul>
                <li>50 BUET Standard Model Tests</li>
                <li>Regularly scheduled exams</li>
                <li>Exam Leaderboard for each session</li>
                <li>Detailed solution sheets</li>
                <li>Problem-solving classes</li>
                <li>Digital BUET Solved Question Bank</li>
                <li>Limited enrollment time</li>
                <li>Support until the BUET exam</li>
              </ul>
            </div>
            <div className="single-Exam-Batch-button">
              <a href="/">1000 TK</a>
            </div>
            <div className="single-Exam-Batch-brand_logo">
              <img src={mominsCareLogoV2Img} alt="" />
            </div>
          </div>
          {/* <!--  --> */}
          <div className="single-Exam-Batch">
            <div className="single-Exam-Batch-logo">
              <img src={BUETEnglogo} alt="" />
            </div>
            <div className="single-Exam-Batch-heading">BUET Exam Batch</div>
            <div className="single-Exam-Batch-details">
              <ul>
                <li>50 BUET Standard Model Tests</li>
                <li>Regularly scheduled exams</li>
                <li>Exam Leaderboard for each session</li>
                <li>Detailed solution sheets</li>
                <li>Problem-solving classes</li>
                <li>Digital BUET Solved Question Bank</li>
                <li>Limited enrollment time</li>
                <li>Support until the BUET exam</li>
              </ul>
            </div>
            <div className="single-Exam-Batch-button">
              <a href="/">1000 TK</a>
            </div>
            <div className="single-Exam-Batch-brand_logo">
              <img src={mominsCareLogoV2Img} alt="" />
            </div>
          </div>
          <div className="single-Exam-Batch">
            <div className="single-Exam-Batch-logo">
              <img src={BUETEnglogo} alt="" />
            </div>
            <div className="single-Exam-Batch-heading">BUET Exam Batch</div>
            <div className="single-Exam-Batch-details">
              <ul>
                <li>50 BUET Standard Model Tests</li>
                <li>Regularly scheduled exams</li>
                <li>Exam Leaderboard for each session</li>
                <li>Detailed solution sheets</li>
                <li>Problem-solving classes</li>
                <li>Digital BUET Solved Question Bank</li>
                <li>Limited enrollment time</li>
                <li>Support until the BUET exam</li>
              </ul>
            </div>
            <div className="single-Exam-Batch-button">
              <a href="/">1000 TK</a>
            </div>
            <div className="single-Exam-Batch-brand_logo">
              <img src={mominsCareLogoV2Img} alt="" />
            </div>
          </div>
          <div className="single-Exam-Batch">
            <div className="single-Exam-Batch-logo">
              <img src={BUETEnglogo} alt="" />
            </div>
            <div className="single-Exam-Batch-heading">BUET Exam Batch</div>
            <div className="single-Exam-Batch-details">
              <ul>
                <li>50 BUET Standard Model Tests</li>
                <li>Regularly scheduled exams</li>
                <li>Exam Leaderboard for each session</li>
                <li>Detailed solution sheets</li>
                <li>Problem-solving classes</li>
                <li>Digital BUET Solved Question Bank</li>
                <li>Limited enrollment time</li>
                <li>Support until the BUET exam</li>
              </ul>
            </div>
            <div className="single-Exam-Batch-button">
              <a href="/">1000 TK</a>
            </div>
            <div className="single-Exam-Batch-brand_logo">
              <img src={mominsCareLogoV2Img} alt="" />
            </div>
          </div>
          <div className="single-Exam-Batch">
            <div className="single-Exam-Batch-logo">
              <img src={BUETEnglogo} alt="" />
            </div>
            <div className="single-Exam-Batch-heading">BUET Exam Batch</div>
            <div className="single-Exam-Batch-details">
              <ul>
                <li>50 BUET Standard Model Tests</li>
                <li>Regularly scheduled exams</li>
                <li>Exam Leaderboard for each session</li>
                <li>Detailed solution sheets</li>
                <li>Problem-solving classes</li>
                <li>Digital BUET Solved Question Bank</li>
                <li>Limited enrollment time</li>
                <li>Support until the BUET exam</li>
              </ul>
            </div>
            <div className="single-Exam-Batch-button">
              <a href="/">1000 TK</a>
            </div>
            <div className="single-Exam-Batch-brand_logo">
              <img src={mominsCareLogoV2Img} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="down-footer gap-package-bottom">
        <hr />
        <p>©2023 Momins'care® by Learners Dream, Inc.</p>
        <br />
        <p>
          <a href="/terms-of-service">Terms of Service</a> |{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </>
  );
}

export default Packages;
