import React from "react";
import "../styles/ComingSoon.css";
import UnderConstruction from "../assets/under_construction.svg";
import Navbar from "./Navbar";

function ComingSoon() {
  return (
    <>
    <Navbar />
      <div class="comingSoonSection">
        <img src={UnderConstruction} alt="" />
        <h1>Coming Soon</h1>
        <p>
          We are working very hard on the new version of our site. It will bring
          a lot of new features. Stay tuned!
        </p>
        <p>This page is under constuction</p>
      </div>
    </>
  );
}

export default ComingSoon;
