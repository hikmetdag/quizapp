import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Home from './pages/home';
import { QuizProvider } from './contexts/quiz';
function App() {
  return (
    <BrowserRouter>
    <QuizProvider>
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </QuizProvider>
  </BrowserRouter>
  );
}

export default App;
