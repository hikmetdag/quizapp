import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './pages/quiz';
import Home from './pages/home';
import Result from './pages/result';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
