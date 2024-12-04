import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../../redux/slices/quizSlices";

const Quiz = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, []);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading quizzes</div>;
  }

  return (
    <div>
      {list.length === 0 ? (
        <div>No quizzes available</div>
      ) : (
        <ul>
          {list.map((quiz, index) => (
            <li key={quiz.id}>
              <h3>{quiz.category}</h3>
              <p>{quiz.question.text}</p> 
              <ul>
                {quiz.incorrectAnswers.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
                <li>{quiz.correctAnswer}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Quiz;
