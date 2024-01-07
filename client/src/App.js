import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
