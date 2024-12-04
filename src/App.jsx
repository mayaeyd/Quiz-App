import { useEffect } from "react";
import "./styles/App.css";
import { fetchQuizzes } from "./redux/slices/quizSlices";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<WelcomePage/>} />
        <Route path="/quiz" element= {<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
