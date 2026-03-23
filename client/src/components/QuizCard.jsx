import React from "react";

import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="card">
      <div className="card-description">Course Title: {quiz.quizName}</div>

      <div className="card-description">Course Title: {quiz.difficulty}</div>

      <div className="card-description">Course Title: {quiz.category}</div>
    </div>
  );
};

export default QuizCard;
