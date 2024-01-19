import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Home = () => {
  const navigate = useNavigate();
  const [quizState, dispatch, selectedCategory, setSelectedCategory] =
    useContext(QuizContext);
  const startQuiz = (category) => {
    dispatch({ type: "RESTART" });
    setSelectedCategory(category); // Kategoriyi seç
    navigate("/quiz"); // state bilgisini burada set etmeye gerek yok
  };

  return (
    <>
      <div className="container">
        <h1>Hollandaca ogrenmeye hazirmisin</h1>
        <h2>Ogrenmek icin asagidaki butonu tklayin </h2>
        <button onClick={() => startQuiz("A1")}>A1 Seviyesi</button>
        <button onClick={() => startQuiz("A2")}>A2 Seviyesi</button>
        <button onClick={() => startQuiz("B1")}>B1 Seviyesi</button>
        <button onClick={() => startQuiz("B2")}>B2 Seviyesi</button>
      </div>
    </>
  );
};
export default Home;
