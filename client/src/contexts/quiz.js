import React, { createContext, useReducer, useEffect } from "react";
//import questions from "../data";
//import { shuffleAnswers } from "../helpers";
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
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  const [data, error] = useFetch("http://localhost:8080/api/questions");
  console.log(data);

  const questionsData = Array.isArray(data?.questions) ? data.questions : [];

  // Check if there's an error while fetching questions
  useEffect(() => {
    if (error) {
      console.error("Error fetching questions:", error);
    }
    console.log("responseData:", data);
    console.log("questionsData:", questionsData);
  }, [error, data, questionsData]);

  const firstQuestion = questionsData?.[0]; // Access the first question if available
  const initialAnswers = firstQuestion?.incorrectAnswers || [];

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    questions: questionsData || [], // Use fetched questions or default to an empty array
    answers: initialAnswers,
  });

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
