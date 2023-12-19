import React from "react";

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
