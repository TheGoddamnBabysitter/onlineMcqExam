import React, { useEffect, useState } from "react";
import "../styles/chapterlist.css";
import "../styles/regular-exam.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loading from "../components/loading";

function RegularExamEng() {
  // const [data, setData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState("");
  const [chapterArray, setChapterArray] = useState([]);
  const [chapter, setChapter] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSubject(params.get("s"));
    if (subject) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/regex-eng/subject`, {
          subject,
        })
        .then((res) => {
          setChapterArray(res.data.chapters);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.search, subject]);

  if (loading) {
    return (
<Loading/>
    );
  }

  return (
    <>
      <Navbar />
      <section className="pre-exam-form-parent">
        <p>
          <a href="/dashboard">&larr; back </a>
        </p>
        <div className="question_page-cover relative">
          <div className="question_page-cover-bg top-0 left-0 min-w-full min-h-full">
            <img
              src={`/assets/subject-bg-full/${subject}.png`}
              alt=""
              className="min-w-full min-h-full rounded-2xl"
            />
          </div>
          <p className="absolute RE-Banner-text">
            {subject
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Paper
          </p>
        </div>
        <h4 className="give-exam-on">Give exam on</h4>

        <form action="">
          {/* <div className="pre-exam-form-container">
            <div className="title">version:</div>
            <div className="content">
              <input
                type="radio"
                name="version"
                value="ver-bangla"
                id="ver-bangla"
                required
              />
              <input
                type="radio"
                name="version"
                value="ver-english"
                id="ver-english"
              />

              <label htmlFor="ver-bangla" className="option bangla">
                Bangla
              </label>
              <label htmlFor="ver-english" className="option english">
                English
              </label>
            </div>
          </div> */}
          <div className="pre-exam-form-container">
            <div className="title">Question amount :</div>
            <div className="content">
              <div
                className="PEFC-Btn PEFC-Btn_active"
                onClick={() => setQuestionCount(3)}
              >
                3
              </div>
              <div className="PEFC-Btn" onClick={() => setQuestionCount(5)}>
                5
              </div>
              <div className="PEFC-Btn" onClick={() => setQuestionCount(7)}>
                7
              </div>
              <div className="PEFC-Btn" onClick={() => setQuestionCount(8)}>
                8
              </div>
              <div className="PEFC-Btn" onClick={() => setQuestionCount(10)}>
                10
              </div>
            </div>
          </div>

          <div className="pre-exam-form-container">
            <div className="title">Time :</div>
            <div className="content">
              <div className="PEFC-Btn" onClick={() => setTotalTime(1)}>
                1 min
              </div>
              <div className="PEFC-Btn" onClick={() => setTotalTime(2)}>
                2 min
              </div>
              <div className="PEFC-Btn" onClick={() => setTotalTime(3)}>
                3 min
              </div>
              <div className="PEFC-Btn" onClick={() => setTotalTime(4)}>
                4 min
              </div>
              <div className="PEFC-Btn" onClick={() => setTotalTime(5)}>
                5 min
              </div>
            </div>
          </div>

          <div className="pre-exam-form-container">
            <div className="title">Difficulty:</div>
            <div className="content">
              <div className="PEFC-Btn">Easy</div>
              <div className="PEFC-Btn">Medium</div>
              <div className="PEFC-Btn">Hard</div>
            </div>
          </div>

          <div className="pre-exam-form-container">
            <div className="title">Chapter :</div>
            <div className="content">
              {chapterArray.map((ch, index) => (
                <>
                  <div
                    className="PEFC-Btn"
                    onClick={() => setChapter(index + 1)}
                  >
                    {index + 1}. {ch}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="pre-exam-form-container">
            <Link
              className="btn"
              // to="/courses/regular-exam-eng/exam/:question-id"
              // state={{ data }}
              onClick={() => {
                setLoading(true);
                if (chapter !== 0 && totalTime !== 0 && questionCount !== 0) {
                  axios
                    .post(`${process.env.REACT_APP_API_URL}/api/create-exam`, {
                      uid: "2sICnWICDrMOpn3Du4qpZr0V9Ca1",
                      examType: "regular",
                      examQuestionAmount: "20",
                      examTime: "20",
                      examHardness: "medium",
                      examChapter: "1",
                      subject: subject,
                      chapter: [chapter],
                      totalTime: totalTime * 60,
                      questionCount,
                    })
                    .then((res) => {
                      console.log(res.data.questionSet);
                      console.log(res.data);
                      navigate(
                        `/courses/regular-exam-eng/exam/${res.data.questionSetId}`,
                        {
                          state: {
                            data: res.data.questionSet || null,
                            subject: subject || null,
                            chapter: [chapter],
                            totalTime,
                            questionCount,
                          },
                        }
                      );

                      setLoading(false);
                    })
                    .catch((error) => {
                      console.log(error);
                      setLoading(false);
                    });
                } else {
                  setLoading(false);
                  alert("Please select all options");
                }
              }}
            >
              Lets give exam
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default RegularExamEng;
