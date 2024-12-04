//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./styles/App.css";
import { fetchQuizzes } from "./redux/slices/quizSlices";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const {} = useSelector((state)=>state.quizzes)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchQuizzes());
  },[])
  return (
    <>

    </>
  );
}

export default App;
