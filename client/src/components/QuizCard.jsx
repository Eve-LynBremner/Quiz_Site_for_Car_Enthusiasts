import React from "react";

import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const borderColor =
    {
      easy: "border-green-500",
      medium: "border-yellow-500",
      hard: "border-red-500",
    }[quiz.difficulty.toLowerCase()] || "border-gray-300";

  return (
    <div className={`card border-2 ${borderColor} p-4 rounded-lg text-white`}>
      <div className="card text-white">
        <div className="card-description text-white">
          Course Title: {quiz.id}
        </div>
        <div className="card-description text-white">
          Course Title: {quiz.quizName}
        </div>

        <div className="card-description">Course Title: {quiz.difficulty}</div>

        <div className="card-description">Course Title: {quiz.category}</div>
        <Link
          to={`/quiz/${quiz.id}`}
          className="mt-4 inline-block px-4 py-2 text-white font-semibold rounded-md"
        >
          Try
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
