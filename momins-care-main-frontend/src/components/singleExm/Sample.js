import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SampleQ from "./SampleQ";

const Sample = () => {
  const que = useLoaderData();

  let { version, dificulty, quantity } = useParams();

  const data = que.filter(
    (question) =>
      question.dificulty === dificulty && question.version === version
  );
  // const questions = []
  const questions = [];

  //   const array = [];
  //   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const item = data[randomIndex];

    if (!questions.includes(item)) {
      questions.push(item);
    } else {
      i--;
    }
  }

  console.log(questions);

  let rightAnsArrey = [];
  for (let i = 0; i < questions.length; i++) {
    const rightAnswer = questions[i].rightAns;
    // const rightAnsId = collections[i]._id
    // const rightAnsObject = {rightAnsId,rightAnswer}
    rightAnsArrey.push(rightAnswer);
  }
  console.log(rightAnsArrey);
  // let selectedAnsArrey = [];

  const [selectedAnsArrey, setselectedAnsArrey] = useState([]);

  const getOptions = (data) => {
    // console.log(data);
    const oldSelectedAnsArrey = selectedAnsArrey;
    oldSelectedAnsArrey[data.index] = data.selectedOption;
    setselectedAnsArrey(oldSelectedAnsArrey);
    console.log(selectedAnsArrey);
  };

  const [score, setScore] = useState(0);

  const submitExm = () => {
    if (
      selectedAnsArrey.length < rightAnsArrey.length ||
      selectedAnsArrey.includes(undefined)
    ) {
      alert("You have ans all the questions");
    } else {
      document.getElementById("submit").style.display = "inline";
      document.getElementById("checkExm").style.display = "none";
      document.getElementById("form").style.display = "none";
      let newScore = 0;
      for (let i = 0; i < rightAnsArrey.length; i++) {
        if (rightAnsArrey[i] === selectedAnsArrey[i]) {
          // console.log("right");
          newScore = newScore + 1;
          setScore(newScore);
        }
      }
      // console.log("submited");
    }
  };

  const reload = (e) => {
    e.target.reset();
  };

  // const errCheck = () =>{
  //     console.log(selectedAnsArrey);
  //     console.log(rightAnsArrey);
  // }

  return (
    <div>
      <h2 style={{ marginLeft: "40px" }}>Score: {score}</h2>
      <div className="container">
        <form onSubmit={reload}>
          <div id="form">
            {/* <img src={`${}`} alt="" />
            <h1>{`length: ${questions.length}`}</h1> */}
            {questions.map((question, index) => (
              <SampleQ
                key={index}
                onClick={getOptions}
                index={questions.indexOf(question)}
                question={question}
              ></SampleQ>
            ))}
          </div>
          <button id="checkExm" type="button" onClick={submitExm}>
            Submit
          </button>

          <br></br>
          <button id="submit" style={{ display: "none" }} type="submit">
            Re-Exam
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sample;
