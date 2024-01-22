import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

function KatexEquation({ equation }) {
  return (
    <>
      {/* <div
                style={{
                    fontStyle: "none",
                    width: "500px",
                    overflow: "hidden",
                }}
            > */}
      {/* <span className="katex-equation quiz-question-mini-part"> */}
      <BlockMath>{equation}</BlockMath>

      {/* </span> */}
      {/* </div> */}
    </>
  );
}

export default KatexEquation;
