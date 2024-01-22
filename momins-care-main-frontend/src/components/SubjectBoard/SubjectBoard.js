import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubjectBoard = () => {
  const [paper, setPaper] = useState("");
  const [chapter, setChapter] = useState("");

  const chapterlists = {
    physics1st: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    physics2nd: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    math1st: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    math2nd: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    chem1st: [1, 2, 3, 4, 5],
    chem2nd: [1, 2, 3, 4, 5],
  };
  // const [paper, setPaper] = useState("");

  const [dificulty, setDificulty] = useState("");
  const [version, setVersion] = useState("");
  const [quantity, setQuantity] = useState("");
  const [chapterArray, setChapterArray] = useState([]);

  const addChapter = (e) => {
    setChapter(e.target.value);
    localStorage.setItem("chapter", e.target.value);
  };

  const click = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "dificulty") {
      setDificulty(value);
      localStorage.setItem("dificulty", value);
    } else if (name === "version") {
      setVersion(value);
    } else if (name === "quantity") {
      setQuantity(value);
      localStorage.setItem("quantity", value);
    }
  };
  useEffect(() => {
    let newpaper = localStorage.getItem("paper");
    setPaper(newpaper);
    if (newpaper === "physics1st") {
      setChapterArray(chapterlists.physics1st);
    } else if (newpaper === "physics2nd") {
      setChapterArray(chapterlists.physics2nd);
    } else if (newpaper === "chem1st") {
      setChapterArray(chapterlists.chem1st);
    } else if (newpaper === "chem2nd") {
      setChapterArray(chapterlists.chem2nd);
    } else if (newpaper === "math1st") {
      setChapterArray(chapterlists.math1st);
    } else if (newpaper === "math2nd") {
      setChapterArray(chapterlists.math2nd);
    }
    console.log(chapterArray);
    console.log(newpaper);
  }, [
    chapterArray,
    chapterlists.physics1st,
    chapterlists.physics2nd,
    chapterlists.chem1st,
    chapterlists.chem2nd,
    chapterlists.math1st,
    chapterlists.math2nd,
  ]);

  // const [questions, setQuestions] = useState([]);
  // useEffect(() => {
  //     fetch("https://momins-care-backend.onrender.com/physics1st/5")
  //         .then((res) => res.json)
  //         .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <div className="container">
        <div className="select-subject-container">
          <h1>{paper}</h1>
          {/* <h3 id="chapter">{`${chapter} `}</h3>
                    <h3 id="version">{`${version} `}</h3>
                    <h3 id="Dificulty">{`${dificulty} `}</h3>
                    <h3 id="Quantity">{`${quantity} `}</h3> */}
          <div>
            <h3>Chapter: {`${chapter} `}</h3>
            <div className="subject-name-btn-container">
              {chapterArray.map((chapter, index) => (
                <button
                  className="subject-name-btn"
                  value={chapter}
                  onClick={addChapter}
                  key={index}
                >
                  {chapter}
                </button>
              ))}
            </div>
          </div>
          <div className="input-radio-container">
            <h2>Dificulty :{`${dificulty} `}</h2>
            <div className="radioInput">
              <input
                onClick={click}
                type="radio"
                name="dificulty"
                value="easy"
              ></input>
              Easy
            </div>
            <div className="radioInput">
              <input
                onClick={click}
                type="radio"
                name="dificulty"
                value="medium"
              ></input>
              Medium
            </div>
            <div className="radioInput">
              <input
                onClick={click}
                type="radio"
                name="dificulty"
                value="hard"
              ></input>
              Hard
            </div>
          </div>
          <div className="input-radio-container">
            <h2>Version:{`${version} `}</h2>
            <div className="radioInput">
              <input
                onClick={() => {
                  setVersion("bangla");
                  localStorage.setItem("version", "bangla");
                }}
                type="radio"
                name="version"
                value="bangla"
              ></input>
              Bangla
            </div>
            <div className="radioInput">
              <input
                onClick={() => {
                  setVersion("english");
                  localStorage.setItem("version", "english");
                }}
                type="radio"
                name="version"
                value="english"
              ></input>
              English
            </div>
          </div>

          <div className="input-radio-container">
            <h2>Quantity :{`${quantity} `}</h2>
            <div className="radioInput">
              <input
                onClick={click}
                type="radio"
                name="quantity"
                value={3}
              ></input>
              3
            </div>
            <div className="radioInput">
              <input
                onClick={click}
                type="radio"
                name="quantity"
                value={5}
              ></input>
              5
            </div>
          </div>
          <button className="give-exam-btn">
            <Link
              to={`/${paper}/${chapter}/${version}/${dificulty}/${quantity}`}
            >
              Give Exam
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubjectBoard;
