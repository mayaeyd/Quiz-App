//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./styles/App.css";
import { fetchQuizzes } from "./redux/slices/quizSlices";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<WelcomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
