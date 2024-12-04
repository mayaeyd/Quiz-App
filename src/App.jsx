import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Quiz from "./pages/Quiz";

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
