
import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  
  if (!currentQuestion || !currentQuestion.options) {
    console.error("Invalid question data:", currentQuestion);
    return null; 
  }

  const options = [...currentQuestion.options];
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
};

export default Question;
