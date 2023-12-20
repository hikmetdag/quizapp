import React from "react";
import { Link } from "react-router-dom";

export default function result() {
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Hikmet</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">Hikm</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">8</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">3</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">6</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span>Pass</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
     
    </div>
  );
}
