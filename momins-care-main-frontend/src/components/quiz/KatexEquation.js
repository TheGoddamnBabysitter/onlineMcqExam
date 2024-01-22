import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

function KatexEquation({ equation }) {
  return (
    <>
      <BlockMath>{equation}</BlockMath>
    </>
  );
}

export default KatexEquation;
