import React from "react";
import "../styles/style.css";
import "../styles/index/landing.css";
import "../styles/index/benifits.css";
import "../styles/index/subject-list.css";
import "../styles/index/eng-univarsity-logos.css";
import "../styles/index/div-line.css";
import "../styles/index/potential.css";
import "../styles/index/login-or-signup.css";
import "../styles/index/footer.css";
import mominsCareLogoV2Img from "../assets/MOMINS-CARE-LOGO-v2.png";
import profileUserImg from "../assets/profile-user.svg";
import landingImg from "../assets/landing.png";
import beRocketFastImg from "../assets/benifits/Be Rocket fast.svg";
import manageTimeProperlyImg from "../assets/benifits/Manage Time properly.svg";
import personalProgressTrackingImg from "../assets/benifits/personal progress tracking.svg";
import realTimeResultImg from "../assets/benifits/Real Time Result.svg";
import anyTimeOnAnyDeviceImg from "../assets/benifits/Any Time on Any device.svg";
import learnFromMistakeImg from "../assets/benifits/Learn from mistake.svg";
import engUniversityImage1 from "../assets/eng-logos/1.png";
import engUniversityImage2 from "../assets/eng-logos/2.png";
import engUniversityImage3 from "../assets/eng-logos/3.png";
import engUniversityImage4 from "../assets/eng-logos/4.png";
import engUniversityImage5 from "../assets/eng-logos/5.png";
import engUniversityImage6 from "../assets/eng-logos/6.png";
import engUniversityImage7 from "../assets/eng-logos/7.png";
import engUniversityImage8 from "../assets/eng-logos/8.png";

function Home() {
  return (
    <>
      <section id="home" className="landing-page">
        <div className="landing-page-header">
          <img
            className="landing-page-logo-img"
            src={mominsCareLogoV2Img}
            alt=""
            srcset=""
          />
          <p className="landing-page-header-dashboard">
            <a href="/home">My Dashboard</a>
            <img
              className="landing-page-profile-img"
              src={profileUserImg}
              alt=""
              srcset=""
            />
          </p>
        </div>
        <div className="landing-page-main-content">
          <div className="landing-page-text">
            <h1>
              <img src={mominsCareLogoV2Img} alt="" srcset="" />
            </h1>
            <p>
              Be unbeatable in any admission test! Unleash your full potential
              by practising an unlimited number of exams with us.
            </p>
            <div className="landing-page-button-section">
              <a
                href="/register"
                className="btn landing-page-button landing-page-button-tff"
              >
                Try for free
              </a>
              <span>or</span>
              <a
                href="/login"
                className="btn landing-page-button landing-page-button-login"
              >
                Login
              </a>
            </div>
          </div>
          <div className="landing-page-picture">
            <img src={landingImg} alt="" srcset="" />
          </div>
        </div>
        <div className="landing-page-features">
          <ul className="landing-page-feature-ul">
            <li className="landing-page-feature-li-1">
              <h2>5000+</h2>
              <p>Students</p>
            </li>
            <li className="landing-page-feature-li-2">
              <h2>2M</h2>
              <p>Question</p>
            </li>
            <li className="landing-page-feature-li-3">
              <h2>Unlimited ♾️</h2>
              <p>Exams</p>
            </li>
            <li className="landing-page-feature-li-4">
              <h2>🕑</h2>
              <p>Any Time</p>
            </li>
            <li className="landing-page-feature-li-5">
              <h2>📱</h2>
              <p>Any Device</p>
            </li>
            <li className="landing-page-feature-li-6">
              <h2>🔴 Live</h2>
              <p>Leaderboard</p>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- landing page end --> */}

      {/* <!-- benifits --> */}
      <section className="benifits-section">
        <div className="flex-center">
          <p className="benifits-text">Benifits</p>
          <div className="benifits-cards">
            <div className="benifits-card benifits-card-1">
              <img src={beRocketFastImg} alt="" srcset="" />
              <p>Be Rocket fast</p>
            </div>
            <div className="benifits-card benifits-card-2">
              <img src={manageTimeProperlyImg} alt="" />
              <p>Manage Time Properly</p>
            </div>
            <div className="benifits-card benifits-card-3">
              <img src={personalProgressTrackingImg} alt="" srcset="" />
              <p>personal progress tracking</p>
            </div>
            <div className="benifits-card benifits-card-4">
              <img src={realTimeResultImg} alt="" srcset="" />
              <p>Real Time Result</p>
            </div>
            <div className="benifits-card benifits-card-5">
              <img src={anyTimeOnAnyDeviceImg} alt="" srcset="" />
              <p>Any Time on Any device</p>
            </div>
            <div className="benifits-card benifits-card-6">
              <img src={learnFromMistakeImg} alt="" srcset="" />
              <p>Learn from mistake</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- benifits end --> */}

      {/* <!-- line --> */}
      <section className="line">
        <div className="div-line"></div>
      </section>
      {/* <!-- line end --> */}

      {/* <!-- subject list --> */}
      <section className="subject-list">
        <div className="subject-list-text">
          <p>Subject List</p>
        </div>
        <div className="subject-list-cards">
          <div className="subject-list-card subject-list-card-1">
            <p>
              <a href="http://">Physics 1st paper</a>
            </p>
          </div>
          <div className="subject-list-card subject-list-card-2">
            <p>Physics 2nd paper</p>
          </div>
          <div className="subject-list-card subject-list-card-3">
            <p>Chemistry 1st Paper</p>
          </div>
          <div className="subject-list-card subject-list-card-4">
            <p>Chemistry 2nd paper</p>
          </div>
          <div className="subject-list-card subject-list-card-5">
            <p>Higher-Math 1st paper</p>
          </div>
          <div className="subject-list-card subject-list-card-6">
            <p>Higher-Math 2nd paper</p>
          </div>
        </div>
      </section>
      {/* <!-- subject list end --> */}

      {/* <!-- eng univarsity logos --> */}
      <section className="eng-univarsity-logos">
        <div className="eng-univarsity-logos-text">
          <p>Focused on Engeareing Admission</p>
        </div>
        <div className="eng-univarsity-logos-images">
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage1}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage2}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage3}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage4}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage5}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage6}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage7}
            alt=""
            srcset=""
          />
          <img
            className="eng-univarsity-logo-img"
            src={engUniversityImage8}
            alt=""
            srcset=""
          />
        </div>
      </section>
      {/* <!-- eng univarsity logos end --> */}

      {/* <!-- line --> */}
      <section className="line">
        <div className="div-line"></div>
      </section>
      {/* <!-- line end --> */}

      {/* <!-- potential  --> */}
      <section className="potential">
        <div className="potential-div">
          <div className="potential-logo">
            {/* <img src={potentialLogo} alt="" srcset="" /> */}
          </div>
          <div className="potential-text">
            <p>Unleash your full potential</p>
          </div>
        </div>
      </section>
      {/* <!-- potential end --> */}

      {/* <!-- line --> */}
      <section className="line">
        <div className="div-line"></div>
      </section>
      {/* <!-- line end --> */}

      {/* <!-- login or sign-up --> */}
      {/* <section id="login" className="login-or-signup">
    <div className="login-or-signup_bg-gradint">
      <div className="login-or-signup-form_container">
        <div className="login-or-signup-form_white-bg">
            <h2>Join us now</h2>
            <form action="" method="post">
              <div className="form-container">
                <label htmlFor="uname">Username : </label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <br /><br />
                <label htmlFor="eml">Email Adress : </label>
                <input type="email" placeholder="Enter email address" name="eml" required /> 
                <br /><br />
                <label htmlFor="phn">Mobile Number : </label>
                <input type="number" placeholder="Enter Phone number" name="phm" required /> 
                <br /><br />
                <label htmlFor="psw">Password : </label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br /><br />
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>
                <br />
                <label>
                  <input id="checkbox1" type="checkbox" checked="checked" name="remember" />
                  Remember me
                </label>
                <br /><br />
              
              <div className="Forgot-div">
                <span className="fpass"><a href="#">Forgot password?</a></span>
              </div>
              <div className="login-extarnal">
            <a href="http://google.com">
              <div className="login-with-externals">
                <div className="login-with-external login-with_google">
                  <img src="../assets/login-logos/Google.webp" alt="" srcset="" />
                  <span>Login With Google</span>
                </div></div>
            </a>

                <a href="http://">
                <div className="login-with-external login-with_facebook">
                  <img src="../assets/login-logos/Facebook.png" alt="" srcset="" />
                  <span>Login With Facebook</span>
                </div> 
              </a></div>
              <a href="Pages/packages.html">Dev login</a>
              </div>
            </form>
          </div>
      </div>
    </div>
  </section> */}
      {/* <!-- login or sign-up end --> */}

      {/* <!-- line --> */}
      <section className="line">
        <div className="div-line"></div>
      </section>
      {/* <!-- line end --> */}

      {/* <!-- footer --> */}
      <section className="footer">
        <div className="footer-container">
          <div className="upper-footer">
            <div className="colum1">
              <div className="colum1-logo">
                <img src={mominsCareLogoV2Img} alt="" srcset="" />
                <br />
                <br />
              </div>
              <div className="colum1-text">
                <p>Unleash your full potential</p>
              </div>
            </div>
            <div className="column2">
              <b>Product</b>
              <br /> <br />
              <ul>
                <li>
                  <a href="/product">Product</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/login">Log in</a>
                </li>
                <li>
                  <a href="/request-access">Request Access</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
              </ul>
            </div>
            <div className="column3">
              <b>About us</b>
              <br /> <br />
              <ul>
                <li>
                  <a href="/about">About Momin's Care</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/join-us">Join us</a>
                </li>
              </ul>
            </div>
            <div className="column4">
              <b>Support</b>
              <br /> <br />
              <ul>
                <li>
                  <a href="/help-center">Help Center</a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
                <li>
                  <a href="/legal">Legal</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="column5">
              <b>Follow us</b>
              <br /> <br />
              <ul>
                <li>
                  <a href="https://www.facebook.com/your-page">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/your-handle">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/your-account">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/your-channel">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="down-footer">
            <p>©2023 Momins'care® by Learners Dream, Inc.</p>
            <br />
            <p>
              <a href="/terms-of-service">Terms of Service</a> |{" "}
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
