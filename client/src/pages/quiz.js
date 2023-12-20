import React from "react";
import Question from "../components/question";
export default function quiz() {
  const onPrev = () => {
    console.log("prev question");
  };

  const onNext = () => {
    console.log("next question");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Question />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>{" "}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
