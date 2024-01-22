import React from "react";
import KatexEquation from "./KatexEquation";

function Quiz({
  questionId,
  question,
  qimg,
  options,
  questionIndex,
  userAnswer,
  onAnswerSelect,
}) {
  return (
    <>
      <div className="quiz-container">
        <div className="title">
          <h1
            className="quiz-question"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "85%",
            }}
          >
            <span style={{ marginRight: "8px" }}>{questionIndex + 1}.</span>
            {question.map((singleQuestion, index) => (
              <span className="quiz-question-mini-part" key={index}>
                {singleQuestion.type === "text" ? (
                  // <span className="quiz-question-mini-part">
                  <>{singleQuestion.value}</>
                ) : (
                  // </span>
                  <KatexEquation equation={singleQuestion.value} />
                )}
              </span>
            ))}
          </h1>
          {qimg ? (
            <div id="img" className="quiz-question-img">
              <img src={`${qimg}`} alt=""></img>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="content">
          {options.map((option, index) => {
            return (
              <>
                <input
                  type="radio"
                  name="phy1"
                  id={`${questionId + (index + 1)}`}
                />
                {/* {console.log(option)} */}
                <label
                  htmlFor={`${questionId + (index + 1)}`}
                  className={`${
                    index + 1 === userAnswer ? "selected" : "option option-hover"
                  }`}
                  onClick={() => {
                    onAnswerSelect(index + 1);
                  }}
                >
                  <span className="quiz-question-mini-part">
                    <span
                      className={`${
                        option.type === "text"
                          ? "quiz-question-option"
                          : "quiz-question-option-equation"
                      }`}
                    >
                      A.
                    </span>
                    {option.type === "text" ? (
                      <span>{option.value}</span>
                    ) : option.type === "equation" ? (
                      <KatexEquation equation={option.value} />
                    ) : (
                      <img src={option.value} alt="option" />
                    )}
                  </span>
                </label>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Quiz;
