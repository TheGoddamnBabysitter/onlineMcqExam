import React, { useEffect } from "react";
import Quiz from "./Quiz";

function QuizContainer({ questionSet, userAnswers, setUserAnswers }) {
  const handleAnswerSelection = (questionId, answer) => {
    setUserAnswers((prev) => {
      return { ...prev, [questionId]: answer };
    });
    console.log(userAnswers);
  };

  // useEffect(() => {
  //     console.log(questionSet);
  // })

  return (
    <>
      <div className="quiz-set">
        {questionSet.map((quiz, index) => (
          <Quiz
            key={index}
            questionId={quiz._id}
            question={quiz.question}
            qimg={quiz.questionImg}
            options={quiz.options}
            questionIndex={index}
            userAnswer={userAnswers[quiz._id]}
            onAnswerSelect={(selectedOption) =>
              handleAnswerSelection(quiz._id, selectedOption)
            }
          />
        ))}
      </div>
    </>
  );
}

export default QuizContainer;
