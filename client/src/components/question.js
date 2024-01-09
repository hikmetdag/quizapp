// Question.jsx
import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (currentQuestion && currentQuestion.incorrectAnswers) {
    const options = [
      ...currentQuestion.incorrectAnswers,
      currentQuestion.correctAnswer,
    ];

    return (
      <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
          {options.map((answer, index) => (
            <Answer
              answerText={answer}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              key={index}
              index={index}
              onSelectAnswer={(answerText) =>
                dispatch({ type: "SELECT_ANSWER", payload: answerText })
              }
            />
          ))}
        </div>
      </div>
    );
  } else {
    console.error("Invalid question data:", currentQuestion);
    return null; // or handle the case where data is invalid
  }
};

export default Question;
