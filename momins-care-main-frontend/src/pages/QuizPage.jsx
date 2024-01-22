import React, { useEffect, useState } from "react";
import "../styles/regular-exam.css";
import "../styles/dashboard/exam.css";
import QuizContainer from "../components/quiz/QuizContainer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "../pages/NotFound";
import Timer from "../components/Timer";
import Loading from "../components/loading";

function QuizPage() {
  const location = useLocation();
  const data = location.state.data;
  const [userAnswers, setUserAnswers] = useState({});
  const { questionSetId } = useParams();
  const [rightAnsSet, setRightAnsSet] = useState({});
  const subject = location.state.subject;
  const [haveExamTime, setHaveExamTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const [restTime, setRestTime] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      if (data && Array.isArray(data)) {
        const updatedUserAnswers = data.reduce((acc, obj) => {
          acc[obj._id] = null;
          return acc;
        }, {});

        setUserAnswers(updatedUserAnswers);
      }
    } else {
      return (
        <>
          <NotFound />
        </>
      );
    }
  }, [data]);

  useEffect(() => {
    if (!haveExamTime) {
      submitExam();
    }
  }, [haveExamTime]);

  const submitExam = () => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/submit-exam`, {
        uid: "2sICnWICDrMOpn3Du4qpZr0V9Ca1",
        questionSetId,
        userAnswers,
        restTime,
      })
      .then((res) => {
        console.log(res.data.rightAnsSet);
        setRightAnsSet(res.data.rightAnsSet);
        console.log(rightAnsSet);
        setRightAnsSet((prevRightAnsSet) => {
          const newQuestionData = data.map((question) => {
            const prevQuestionData = { ...question };
            prevQuestionData.userAnswer = userAnswers[question._id];
            prevQuestionData.rightAns = prevRightAnsSet[question._id] || null;
            return prevQuestionData;
          });
          console.log(newQuestionData); // Should show newQuestionData with updated rightAns values

          // Navigate to the solution page after constructing newQuestionData
          navigate(`/courses/regular-exam-eng/exam/${questionSetId}/solution`, {
            state: {
              data: newQuestionData || null,
              subject: subject || null,
              obtainedMarks: res.data.obtainedMarks || 0,
              totalMarks: res.data.totalMarks || 0,
              correctTotal: res.data.correctTotal || 0,
              incorrectTotal: res.data.incorrectTotal || 0,
              notAttemptedTotal: res.data.notAttemptedTotal || 0,
              restTime: restTime || 0,
              chapter: location.state.chapter || null,
              totalTime: location.state.totalTime || 0,
             
            },
          });

          window.scrollTo(0, 0);
          setLoading(false);
          console.log(restTime);

          return prevRightAnsSet; // Return the updated rightAnsSet to maintain state consistency
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (<Loading/>
    );
  }

  return (
    <>
      <div className="relative">
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
        {/*  Exam Details box static code */}
        <div className="QS-Result-box-p">
          <div className="QS-Result-box">
            <h1>Exam Details:</h1>
            <ul>
              {" "}
              <li>
                <span className="font-bold">Subject:</span>{" "}
                {subject
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
                Paper
              </li>
              <li>
                <span className="font-bold">Chapter:</span>{" "}
                {location.state.chapter.length > 1
                  ? location.state.chapter.map((word) => word + ", ")
                  : location.state.chapter}
              </li>
              <li>
                <span className="font-bold">Time:</span> {location.state.totalTime} : 00 min
              </li>
              <li>
                <span className="font-bold">Total Marks:</span> {data.length}
              </li>
            </ul>
          </div>
        </div>
        {/*  Exam details box static code end */}
        <Timer
          setHaveExamTime={setHaveExamTime}
          initialMinutes={location.state.totalTime || 1}
          setRestTime={setRestTime}
        />
        <QuizContainer
          questionSet={data}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px auto 80px auto",
          }}
        >
          <button
            onClick={submitExam}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "2px",
              backgroundColor: "#000",
              cursor: "pointer",
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "bold",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              transition: "background-color 0.3s ease, color 0.3s ease", // Added color transition
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#000";
              e.target.style.border = "1px solid #000";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#000";
              e.target.style.color = "#fff";
              e.target.style.border = "none";
            }}
          >
            Submit Exam
          </button>
        </div>
      </div>
    </>
  );
}
export default QuizPage;
