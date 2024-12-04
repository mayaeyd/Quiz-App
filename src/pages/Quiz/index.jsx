import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes, incrementScore } from "../../redux/slices/quizSlices";
import "./style.css";

const Quiz = () => {
  const dispatch = useDispatch();

  const { list, status, score } = useSelector((state) => state.quizzes);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuiz = list[currentQuestionIndex];

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading quizzes</div>;
  }

  const handleAnswerClick = (answer) => {
    if (answer === currentQuiz.correctAnswer) {
      dispatch(incrementScore(1));
    }
    if (currentQuestionIndex < list.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! You scored ${score}/10`);
    }
  };

  return (
    <>
      <h1>{score}</h1>
      <div className="quiz-container">
        {currentQuiz && (
          <div>
            <h3>{currentQuiz.category}</h3>
            <p>{currentQuiz.question.text}</p>

            <ul>
              {[...currentQuiz.incorrectAnswers, currentQuiz.correctAnswer]
                .sort()
                .map((answer, idx) => (
                  <li key={idx}>
                    <button onClick={() => handleAnswerClick(answer)}>
                      {answer}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;