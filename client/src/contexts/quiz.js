import React, { createContext, useReducer, useEffect } from "react";
import useFetch from "../hooks/fetchHook";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: [],
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      // Update answers based on the next question's possible answers
      const answers = showResults
        ? []
        : state.questions[currentQuestionIndex].incorrectAnswers;
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }

    case "UPDATE_QUESTIONS": {
      const questionsWithAnswers = action.payload.map((questionData) => ({
        ...questionData,
        answers: questionData.incorrectAnswers,
      }));

      return {
        ...state,
        questions: questionsWithAnswers,
        showResults: false,
      };
    }

    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  //const value = useReducer(reducer, initialState);
  const [data] = useFetch("http://localhost:8080/api/questions");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (data) {
      // Update state when data changes
      dispatch({ type: "UPDATE_QUESTIONS", payload: data });
    }
  }, [data, dispatch]);

  return (
    <QuizContext.Provider value={[state, dispatch]}>
      {children}
    </QuizContext.Provider>
  );
};
