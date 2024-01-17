import { useContext } from "react";
import React, { useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const navigate = useNavigate();
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Sonuç Sayfası</div>
          <div className="results-info">
            <div>Testi tamamladınız.</div>
            <div>
            {quizState.questions.length} üzerinden {quizState.correctAnswersCount} kelimeyi &nbsp;
            doğru bildin.
            </div>
          </div>
          <div
             onClick={() => {
              dispatch({ type: "RESTART" });
              navigate("/");
            }}
            className="next-button"
           
          >
            Tekrar başlat
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Soru {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />

          <div
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            className="next-button"
          >
            Sonraki soru
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
