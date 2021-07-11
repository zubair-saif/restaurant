import React from "react";
import aboutImage from "../images/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENTS</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <button>Read</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt />
      </div>
    </div>
  );
}

export default About;
