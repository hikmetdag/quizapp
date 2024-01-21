import React, { createContext, useReducer, useEffect,useState } from "react";
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
        : state.questions[currentQuestionIndex].answers;

      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }

    case "UPDATE_QUESTIONS": {
      console.log("Received payload in UPDATE_QUESTIONS:", action.payload)
      const questionsWithAnswers = action.payload.map((questionData) => ({
        ...questionData,
        answers: [...questionData.incorrectAnswers, questionData.correctAnswer],
      }));
      console.log("Updated questions with answers:", questionsWithAnswers);
      return {
        ...state,
        questions: questionsWithAnswers,
        showResults: false,
      };
    }

    case "RESTART": {
      // localStorage'daki soruları kontrol et
      const storedQuestions = localStorage.getItem("quizQuestions");
      if (storedQuestions) {
        localStorage.clear();
      }
    
      // Şu anda kullanılan durumu sıfırla
      return {
        ...state,
        currentQuestionIndex: 0,
        currentAnswer: "",
        answers: [],
        showResults: false,
        correctAnswersCount: 0,
      };
    }
    
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, error, loading] = useFetch(
    selectedCategory
      ? `http://localhost:8080/api/questions?category=${selectedCategory}`
      : null
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    // Check if there's data in localStorage
    const storedData = localStorage.getItem("quizQuestions");
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch({ type: "UPDATE_QUESTIONS", payload: parsedData });
    } else if (selectedCategory) {
      // Eğer localStorage'da sorular yoksa ve bir kategori seçilmişse yeni soruları yükle
      dispatch({ type: "RESTART" });
      localStorage.clear();
    }
  }, [dispatch, selectedCategory]);
  
  

  useEffect(() => {
    console.log("Fetched Data:", data);

    if (error) {
      console.error("Error fetching questions:", error);
    }

    if (data) {
      console.log("Dispatching data to reducer:", data);
      dispatch({ type: "UPDATE_QUESTIONS", payload: data });
      localStorage.setItem("quizQuestions", JSON.stringify(data));
    }
  }, [data, loading, error, dispatch, selectedCategory]);

  return (
    <QuizContext.Provider
      value={[state, dispatch, selectedCategory, setSelectedCategory]}
    >
      {children}
    </QuizContext.Provider>
  );
};
