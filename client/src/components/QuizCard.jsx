import React from "react";

import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const borderColor =
    {
      easy: "border-green-500",
      medium: "border-yellow-500",
      hard: "border-red-500",
    }[quiz.difficulty.toLowerCase()] || "border-gray-300";

  const bgColor =
    {
      easy: "bg-green-500",
      medium: "bg-yellow-500",
      hard: "bg-red-500",
    }[quiz.difficulty.toLowerCase()] || "border-gray-300";

  return (
    <div className={`card border-4 ${borderColor} p-8 rounded-4xl text-white`}>
      <div className="card text-white">
        <div
          className={`card border-4 ${bgColor} ${borderColor} p-8 rounded-4xl text-white`}
        >
          {quiz.quizName}
        </div>

        <div className="card-description text-white">Quiz Id{quiz.id}</div>
        <div className=" text-white">{quiz.difficulty}</div>

        <div className="card-description">Quiz Category: {quiz.category}</div>
        <Link
          to={`/quiz/${quiz.id}`}
          className="mt-4 inline-block px-4 py-2  font-semibold rounded-md bg-white text-black"
        >
          Try
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
