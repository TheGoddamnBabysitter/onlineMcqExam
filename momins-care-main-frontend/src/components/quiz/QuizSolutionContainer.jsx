import React, { useEffect } from "react";
import QuizSolution from "./QuizSolution";

function QuizSolutionPage({ questionSet }) {
  useEffect(() => {
    console.log(questionSet);
  }, [questionSet]);

  return (
    <>
      <div className="quiz-set">
        {questionSet.map((quiz, index) => (
          <QuizSolution
            key={index}
            questionId={quiz._id}
            question={quiz.question}
            qimg={quiz.questionImg}
            options={quiz.options}
            questionIndex={index}
            userAnswer={quiz.userAnswer}
            rightAns={quiz.rightAns}
            optionType={quiz.optionType}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default QuizSolutionPage;
