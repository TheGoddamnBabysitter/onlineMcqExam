import React, { useState } from "react";
import { Link } from "react-router-dom";

const Subjects = () => {
  const [paper, setPaper] = useState("");
  const addPaper = (e) => {
    localStorage.setItem("paper", e.target.value);
    var selectedPaper = e.target.value;
    setPaper(selectedPaper);
    console.log(localStorage.paper);
    console.log(paper);
  };

  return (
    <div>
      <div className="select-subject-button-container">
        <Link to={`/math1st`}>
          <button type="button" value="math1st" onClick={addPaper}>
            Math 1st
          </button>
        </Link>
        <Link to={`/math2nd`}>
          <button type="button" value="math2nd" onClick={addPaper}>
            Math 2nd
          </button>
        </Link>

        <Link to={`/phy1st`}>
          <button type="button" value="physics1st" onClick={addPaper}>
            Physics 1st
          </button>
        </Link>
        <Link to={`/phy2nd`}>
          <button type="button" value="physics2nd" onClick={addPaper}>
            Physics 2nd
          </button>
        </Link>
        <Link to={`/chem1st`}>
          <button type="button" value="chem1st" onClick={addPaper}>
            Chemistry 1st
          </button>
        </Link>

        <Link to={`/chem2nd`}>
          <button type="button" value="chem2nd" onClick={addPaper}>
            Chemistry 2nd
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Subjects;
