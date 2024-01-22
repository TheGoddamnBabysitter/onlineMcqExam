import React from "react";
import KatexEquation from "./KatexEquation";
import "./Single.css";

// const Question = () => {

//     return(<>

//         </>)
// }

const SampleQ = (props) => {
  const questionSet = props.question;
  // console.log("question set ");
  // console.log(questionSet);
  const qimg = questionSet.questionImg;
  const options = questionSet.answers;
  // const rightAns = questionSet.rightAns;
  const id = questionSet._id;

  const typeArrey = questionSet.typeArrey;
  const valueArrey = questionSet.valueArrey;
  const isOptionImg = questionSet.isOptionImg;
  // console.log(typeArrey, valueArrey);

  // let question = "";
  // for (let i = 0; i < typeArrey.length; i++) {
  //     if (typeArrey[i] === "text") {
  //         question += valueArrey[i] + " ";
  //     } else if (typeArrey[i] === "equation") {
  //         question += "equation ";
  //     }
  // }

  const index = props.index;

  const sendOption = (e) => {
    const selectedOption = e.target.value;
    const sendingData = { index, selectedOption };
    console.log(sendingData);
    props.onClick(sendingData);
  };

  return (
    <>
      {/* <div className="container"> */}
      <div className="quiz-container">
        {/* <h1>
                .{question}
            </h1> */}
        <h1
          className="quiz-question"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "85%",
          }}
        >
          {/* <span className="quiz-question-mini-part">hi</span> */}
          {/* <KatexEquation equation="\frac{-b\pm\sqrt{b^2-4ac}}{2a}" /> */}
          {/* <span>Hello</span> */}
          <span>{index + 1}.</span>
          {valueArrey.map((value, index) => (
            <span className="quiz-question-mini-part" key={index}>
              {typeArrey[index] === "text" ? (
                // <span className="quiz-question-mini-part">
                <>{value}</>
              ) : (
                // </span>
                <KatexEquation equation={value} />
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

        {/* <Question /> */}
        <div style={{ width: "fit-content" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              onClick={sendOption}
              type="radio"
              value={1}
              name={`option${id}`}
              id=""
            />
            {/* {`A. ${options[0]}`} */}
            <span className="quiz-question-mini-part">
              {/* A. <KatexEquation equation={options[0]} /> */}
              <span className="quiz-question-option">A.</span>
              {isOptionImg.option1 === "text" ? (
                <span>{options[0]}</span>
              ) : isOptionImg.option1 === "equation" ? (
                <KatexEquation equation={options[0]} />
              ) : (
                <img src={options[0]} alt="option1" />
              )}
            </span>
          </div>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              onClick={sendOption}
              type="radio"
              value={2}
              name={`option${id}`}
              id=""
            />
            {/* {`B. ${(<KatexEquation equation={options[1]} />)}`} */}
            <span className="quiz-question-mini-part">
              {/* B. <KatexEquation equation={options[1]} /> */}
              <span className="quiz-question-option">B.</span>
              {isOptionImg.option2 === "text" ? (
                <span>{options[1]}</span>
              ) : isOptionImg.option2 === "equation" ? (
                <KatexEquation equation={options[1]} />
              ) : (
                <img src={options[1]} alt="option2" />
              )}
            </span>
          </div>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              onClick={sendOption}
              type="radio"
              value={3}
              name={`option${id}`}
              id=""
            />
            {/* {`C. ${(<KatexEquation equation={options[2]} />)}`} */}
            <span className="quiz-question-mini-part">
              {/* C. <KatexEquation equation={options[2]} /> */}
              <span className="quiz-question-option">C. </span>
              {isOptionImg.option3 === "text" ? (
                <span>{options[2]}</span>
              ) : isOptionImg.option3 === "equation" ? (
                <KatexEquation equation={options[2]} />
              ) : (
                <img src={options[2]} alt="option3" />
              )}
            </span>
          </div>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              onClick={sendOption}
              type="radio"
              value={4}
              name={`option${id}`}
              id=""
            />
            {/* {`D. ${options[3]}`} */}
            <span className="quiz-question-mini-part">
              {/* D. <KatexEquation equation={options[3]} /> */}
              <span className="quiz-question-option">D.</span>
              {isOptionImg.option4 === "text" ? (
                <span>{options[3]}</span>
              ) : isOptionImg.option4 === "equation" ? (
                <KatexEquation equation={options[3]} />
              ) : (
                <img src={options[3]} alt="option4" />
              )}
            </span>
          </div>
          <br></br>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SampleQ;
