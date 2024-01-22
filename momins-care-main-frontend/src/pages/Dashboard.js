import React, { useState } from "react";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard/d.index.css";
import Navbar from "../components/Navbar";
import PieChartComp from "../components/PieChartComp";
import Loading  from "../components/loading";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <>
      <Navbar />
      {/* */}
      <div className="graph-div animate-on-load">
        <div className="graph-div">
          <p className="graph-text">Your Full Exam review at a glance:</p>
          <PieChartComp />
        </div>
      </div>
      <br />

      <div className="animate-on-load">
        {/* <!-- ... your existing content ... --> */}
      </div>

      {/* <!-- recomended exam list       --> */}

      <div className="recomended-exam-section dashboard-left-right-mergin">
        <h1>Recomended Exam</h1>
        <div>
          <div className="recomended-exam-single">
            <div>
              <h3>Suggested Regular Exam (Regular Exam)</h3>
            </div>
            <div className="recomended-exam-data">
              <ul className="recomended-exam-data-flexbox">
                <li className="date">
                  <h4>
                    Date :{" "}
                    {new Date(new Date().getTime() + 6 * 60 * 60 * 1000)
                      .toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })
                      .split(" ")
                      .reverse()
                      .join(" ")}
                  </h4>
                </li>
                <li className="sub-name">
                  <h4>physics 1st paper</h4>
                </li>
                <li className="chap-name">
                  <h4>Vector</h4>
                </li>
                <li className="exam-btn">
                  <button
                    className="recomended-exam-btn"
                    onClick={() => {
                      setLoading(true);
                      axios
                        .post(
                          `${process.env.REACT_APP_API_URL}/api/create-exam`,
                          {
                            uid: "2sICnWICDrMOpn3Du4qpZr0V9Ca1",
                            examType: "regular",
                            examQuestionAmount: "20",
                            examTime: "20",
                            examHardness: "medium",
                            examChapter: "1",
                            subject: "physics-1st",
                            chapter: ["2"],
                            totalTime: 1,
                            questionCount: 3,
                          }
                        )
                        .then((res) => {
                          console.log(res.data.questionSet);
                          console.log(res.data);
                          navigate(
                            `/courses/regular-exam-eng/exam/${res.data.questionSetId}`,
                            {
                              state: {
                                data: res.data.questionSet || null,
                                subject: "physics-1st" || null,
                                chapter: ["2"],
                                totalTime: 1,
                                questionCount: 3,
                              },
                            }
                          );
                          window.scrollTo(0, 0);
                          setLoading(false);
                        })
                        .catch((error) => {
                          console.log(error);
                          setLoading(false);
                        });
                    }}
                  >
                    Give exam
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="recomended-exam-single">
            <div>
              <h3>Daily Exam (BUET Exam Batch)</h3>
            </div>
            <div className="recomended-exam-data">
              <ul className="recomended-exam-data-flexbox">
                <li className="date">
                  <h4>
                    Date :{" "}
                    {new Date(new Date().getTime() + 6 * 60 * 60 * 1000)
                      .toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })
                      .split(" ")
                      .reverse()
                      .join(" ")}
                  </h4>
                </li>
                <li className="sub-name">
                  <h4>physics 1st paper</h4>
                </li>
                <li className="chap-name">
                  <h4>Vector</h4>
                </li>
                <li className="exam-btn">
                  <button
                    className="recomended-exam-btn"
                    onClick={() => {
                      setLoading(true);
                      axios
                        .post(
                          `${process.env.REACT_APP_API_URL}/api/create-exam`,
                          {
                            uid: "2sICnWICDrMOpn3Du4qpZr0V9Ca1",
                            examType: "regular",
                            examQuestionAmount: "20",
                            examTime: "20",
                            examHardness: "medium",
                            examChapter: "1",
                            subject: "physics-1st",
                            chapter: ["2"],
                            totalTime: 1,
                            questionCount: 3,
                          }
                        )
                        .then((res) => {
                          console.log(res.data.questionSet);
                          console.log(res.data);
                          navigate(
                            `/courses/regular-exam-eng/exam/${res.data.questionSetId}`,
                            {
                              state: {
                                data: res.data.questionSet || null,
                                subject: "physics-1st" || null,
                                chapter: ["2"],
                                totalTime: 1,
                                questionCount: 3,
                              },
                            }
                          );
                          window.scrollTo(0, 0);
                          setLoading(false);
                        })
                        .catch((error) => {
                          console.log(error);
                          setLoading(false);
                        });
                    }}
                  >
                    Give exam
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* <!-- recomended exam end      --> */}

      {/* <!-- MISSED exam list       --> */}

      <div className="missed-exam-section dashboard-left-right-mergin">
        <h1>Missed Exam</h1>
        <div>
          <div className="missed-exam-single">
            <div>
              <h3>Suggested Regular Exam (Regular Exam)</h3>
            </div>
            <div className="missed-exam-data">
              <ul className="missed-exam-data-flexbox">
                <li className="date">
                  <h4>Date : 1 october</h4>
                </li>
                <li className="sub-name">
                  <h4>physics 2nd paper</h4>
                </li>
                <li className="chap-name">
                  <h4>Static Electricity</h4>
                </li>
                <li className="exam-btn">
                  <a href="/" className="missed-exam-btn">
                    Retake
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="missed-exam-single">
            <div>
              <h3>Suggested Regular Exam (Regular Exam)</h3>
            </div>
            <div className="missed-exam-data">
              <ul className="missed-exam-data-flexbox">
                <li className="date">
                  <h4>Date : 1 october</h4>
                </li>
                <li className="sub-name">
                  <h4>physics 2nd paper</h4>
                </li>
                <li className="chap-name">
                  <h4>Static Electricity</h4>
                </li>
                <li className="exam-btn">
                  <a href="/" className="missed-exam-btn">
                    Retake
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* <!-- missed exam end      --> */}

      {/* <!-- exam key section start    --> */}
      <div className="dashboard-key-section dashboard-left-right-mergin">
        <h1>Exam Key info</h1>
        <div>
          <ul className="dashboard-key-section-flexbox">
            <li className="dashboard-key-section-flexbox-single">
              <div className="dashboard-key-section-flexbox-single-img">
                <img src="../../assets/regular-exam-key.png" alt="" />
              </div>
              <div className="dashboard-key-section-flexbox-single-txt">
                <h3>Available Exam Key :</h3>
                <p>34</p>
              </div>
            </li>
            <li className="dashboard-key-section-flexbox-single">
              <div className="dashboard-key-section-flexbox-single-img">
                <img src="../../assets/buet-exam-key.png" alt="" />
              </div>
              <div className="dashboard-key-section-flexbox-single-txt">
                <h3>Given Exams :</h3>
                <p>16</p>
              </div>
            </li>
            <li className="dashboard-key-section-flexbox-single">
              <div className="dashboard-key-section-flexbox-single-img">
                <img src="../../assets/iut-exam-key.png" alt="" />
              </div>
              <div className="dashboard-key-section-flexbox-single-txt">
                <h3>Buy More Key:</h3>
                <p>Available</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--     exam key section end  --> */}

      {/* <!-- subject list section  --> */}
      <div id="subject-list" className="subject-list overlay">
        <h3 className="Subject-List-txt">Let's give another test on...</h3>
        <p className="text-center text-white font-bold">(Regular Exam)</p>
        <div className="sub-list-grid">
          <a href="/courses/regular-exam-eng?s=physics-1st">
            <div className="single-subject single-subject-1">
              <p>Physics 1st Paper</p>
            </div>
          </a>
          <a href="/courses/regular-exam-eng?s=physics-2nd">
            <div className="single-subject single-subject-2">
              <p>Physics 2nd paper</p>
            </div>
          </a>
          <a href="/courses/regular-exam-eng?s=chemistry-1st">
            <div className="single-subject single-subject-3">
              <p>Chemistry 1st Paper</p>
            </div>
          </a>
          <a href="/courses/regular-exam-eng?s=chemistry-2nd">
            <div className="single-subject single-subject-4">
              <p>Chymistry 2nd Paper</p>
            </div>
          </a>
          <a href="/courses/regular-exam-eng?s=higher-math-1st">
            <div className="single-subject single-subject-5">
              <p>Higher Math 1st Paper</p>
            </div>
          </a>
          <a href="/courses/regular-exam-eng?s=higher-math-2nd">
            <div className="single-subject single-subject-6">
              <p>Higher Math 2nd Paper</p>
            </div>
          </a>
        </div>
      </div>
      <br />
      <br />
      {/* <!-- subject list section end --> */}

      {/* <!-- enrolled packages section   --> */}
      <div className="enrolled-packages-section dashboard-left-right-mergin">
        <h1 className="text-2xl text-center m-2">Enrolled packages</h1>
        <h4 className="font-bold text-center">
          Regular Exam Left : <span>156</span>
        </h4>
        <div className="enrollrd-packages-container">
          <a className="package-name" href="#subject-list">
            <div className="relative">
              <div
                id="enrolled-single-packages-background-Image"
                className="enrolled-single-packages"
                style={{
                  backgroundImage:
                    'url("https://i.pinimg.com/originals/5e/98/e5/5e98e5ff51f792d9642c2876c93453ad.jpg")',
                }}
              ></div>
              <div className="enrolled-single-packages-Regular-Exam-text">
                <span>Regular Exam</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="enrolled-single-packages-background-Image"
                className="enrolled-single-packages"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%E0%A6%AC%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9F_%E0%A6%8F%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A6%BE_%28BUET_Area%29.jpg/2560px-%E0%A6%AC%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9F_%E0%A6%8F%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A6%BE_%28BUET_Area%29.jpg")',
                }}
              ></div>
              <div className="enrolled-single-packages-Regular-Exam-text">
                <span>Buet Exam Batch</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="enrolled-single-packages-background-Image"
                className="enrolled-single-packages"
                style={{
                  backgroundImage:
                    'url("https://i.pinimg.com/550x/ab/4b/e2/ab4be247a3a775395bd37802daa8620c.jpg")',
                }}
              ></div>
              <div className="enrolled-single-packages-Regular-Exam-text">
                <span>IUT Exam Batch</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <br />
      {/* <!-- enrolled packages end --> */}

      {/* <!-- buy more packages section  --> */}
      <div className="buy-packages-section dashboard-left-right-mergin">
        <h1 className="text-2xl text-center m-2">Buy more package</h1>
        <div className="buy-packages-container">
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="buy-single-packages-background-Image"
                className="buy-single-packages"
                style={{
                  backgroundImage:
                    'url("https://i.pinimg.com/originals/5e/98/e5/5e98e5ff51f792d9642c2876c93453ad.jpg")',
                }}
              ></div>
              <div className="buy-single-packages-Regular-Exam-text">
                <span>Regular Exam Key</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="buy-single-packages-background-Image"
                className="buy-single-packages"
                style={{
                  backgroundImage:
                    'url("https://afd.gov.bd/sites/default/files/inline-images/MIST%20Pic111.jpg")',
                }}
              ></div>
              <div className="buy-single-packages-Regular-Exam-text">
                <span>MIST Exam Batch</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="buy-single-packages-background-Image"
                className="buy-single-packages"
                style={{
                  backgroundImage:
                    'url("https://www.eduopinions.com/wp-content/uploads/2017/10/Ege-University-campus-610x407.jpg")',
                }}
              ></div>
              <div className="buy-single-packages-Regular-Exam-text">
                <span>CkRUET Exam Batch</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="buy-single-packages-background-Image"
                className="buy-single-packages"
                style={{
                  backgroundImage:
                    'url("https://www.jpss.jp/uploads/univ/292/main.jpg")',
                }}
              ></div>
              <div className="buy-single-packages-Regular-Exam-text">
                <span>Science And Tech Exam Batch</span>
              </div>
            </div>
          </a>
          <a className="package-name" href="/coming-soon">
            <div className="relative">
              <div
                id="buy-single-packages-background-Image"
                className="buy-single-packages"
                style={{
                  backgroundImage:
                    'url("https://s3-media0.fl.yelpcdn.com/bphoto/ySmFi1dAEys1KDiwKoejMA/348s.jpg")',
                }}
              ></div>
              <div className="buy-single-packages-Regular-Exam-text">
                <span>Special Care Exam Batch</span>
              </div>
            </div>
          </a>
          <div className="relative">
            <div
              id="buy-single-packages-background-Image"
              className="buy-single-packages"
              style={{
                backgroundImage:
                  'url("https://as1.ftcdn.net/v2/jpg/03/38/52/62/1000_F_338526290_e5YLnDo1JIv0u0g7sLiKL7FoDoPrSTOx.jpg")',
              }}
            ></div>
            <div className="buy-single-packages-Regular-Exam-text">
              <span>Guideline Batch</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <!-- buy more packages section end --> */}

      {/* <!-- <div id="subject-list" className="subject-list">
      <h3 className="Subject-List-txt">Let's give another test on...</h3>
      <div className="sub-list-grid">
        <a href="Subjects/Physics-1st.html">
          <div className="single-subject single-subject-1">
            <p>Physics 1st Paper</p>
          </div>
        </a>
        <a href="/">
          <div className="single-subject single-subject-2">
            <p>Physics 2nd Paper</p>
          </div>
        </a>
        <a href="/">
          <div className="single-subject single-subject-3">
            <p>Chymistry 1st Paper</p>
          </div>
        </a>
        <a href="/">
          <div className="single-subject single-subject-4">
            <p>Chymistry 2nd Paper</p>
          </div>
        </a>
        <a href="/">
          <div className="single-subject single-subject-5">
            <p>Higher Math 1st Paper</p>
          </div>
        </a>
        <a href="/">
          <div className="single-subject single-subject-6">
            <p>Higher Math 2nd Paper</p>
          </div>
        </a>
      </div>
    </div> --> */}

      <div className="down-footer footer-bottom">
        <hr />
        <p>©2023 Momins'care® by Learners Dream, Inc.</p>
        <br />
        <p>
          <a href="/terms-of-service">Terms of Service</a> |
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
        <br />
      </div>
    </>
  );
}

export default Dashboard;
