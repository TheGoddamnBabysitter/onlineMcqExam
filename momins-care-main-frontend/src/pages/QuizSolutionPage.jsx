import React, { useEffect, useState } from "react";
import "../styles/regular-exam.css";
import QuizSolutionContainer from "../components/quiz/QuizSolutionContainer";
import { useLocation, useNavigate } from "react-router-dom";

function QuizSolution() {
  const location = useLocation();
  const data = location.state.data;
  // const [userAnswers, setUserAnswers] = useState({});
  // const { questionSetId } = useParams();
  const subject = location.state.subject;

  const navigate = useNavigate();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="question_page-cover relative flex items-center justify-center">
        <p className="z-10 translate-y-4">
          {subject
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Paper
        </p>
        <div className="question_page-cover-bg absolute top-0 left-0 min-w-full min-h-full">
          <img
            src={`/assets/subject-bg-full/${subject}.png`}
            alt=""
            className="min-w-full min-h-full rounded-2xl"
          />
        </div>
      </div>
      {/* {console.log(data)} */}
      {/*  result box static code */}
      <div className="QS-Result-box-p">
        <div className="QS-Result-box">
          <h1>Exam Details:</h1>
          <ul>
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
              <span className="font-bold">Time</span>:{" "}
              {Math.floor(location.state.restTime / 60)} :{" "}
              {location.state.restTime % 60} / {location.state.totalTime} : 00
              min
            </li>
            <li>
              <span className="font-bold">Marks</span>:{" "}
              {location.state.obtainedMarks} / {location.state.totalMarks}
            </li>
            <li>
              <span className="font-bold">Correct</span>:{" "}
              {location.state.correctTotal}
            </li>
            <li>
              <span className="font-bold">Incorrect</span>:{" "}
              {location.state.incorrectTotal}
            </li>
            <li>
              <span className="font-bold">Skipped</span>:{" "}
              {location.state.notAttemptedTotal}
            </li>
          </ul>
        </div>
      </div>
      {/*  result box static code end */}
      <h1 className="text-2xl font-bold text-center mt-10">Sollution part</h1>
      <QuizSolutionContainer questionSet={data} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px auto 30px auto",
        }}
      >
        <button
          onClick={() => {}}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "2px",
            backgroundColor: "var(--primary-color)",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#000";
            e.target.style.border = "1px solid #000";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "var(--primary-color)";
            e.target.style.color = "#fff";
            e.target.style.border = "none";
          }}
        >
          Retake
        </button>
      </div>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px auto 80px auto",
        }}
      >
        <button
          onClick={() => {
            navigate("/");
          }}
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
          Go to Dashboard
        </button>
      </div>
    </>
  );
}

export default QuizSolution;
