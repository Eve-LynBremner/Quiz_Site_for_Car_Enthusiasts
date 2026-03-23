import React from "react";

import { Link } from "react-router-dom";

import BorderGlow from "./BorderGlow";
const QuizCard = ({ quiz }) => {
  const difficulty = quiz.difficulty.toLowerCase();

  const difficultyStyles = {
    easy: {
      borderColor: "border-green-500",
      bgColor: "bg-green-600",
      glowColor: "142 70% 50%", // Green HSL
      meshColors: ["#22c55e", "#16a34a", "#4ade80"], // Green Hex variety
    },
    medium: {
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-600",
      glowColor: "45 100% 50%", // Yellow/Gold HSL
      meshColors: ["#eab308", "#ca8a04", "#fde047"], // Yellow Hex variety
    },
    hard: {
      borderColor: "border-red-500",
      bgColor: "bg-red-600",
      glowColor: "0 100% 50%", // Red HSL
      meshColors: ["#ef4444", "#dc2626", "#f87171"], // Red Hex variety
    },
    default: {
      borderColor: "border-gray-300",
      bgColor: "bg-gray-500",
      glowColor: "40 80 80",
      meshColors: ["#c084fc", "#f472b6", "#38bdf8"],
    },
  };

  const style = difficultyStyles[difficulty] || difficultyStyles.default;

  return (
    <BorderGlow
      edgeSensitivity={20}
      glowColor={style.glowColor}
      backgroundColor="#060010"
      borderRadius={50}
      glowRadius={50}
      glowIntensity={2}
      coneSpread={50}
      animated={true}
      colors={style.meshColors}
    >
      <div className="card text-white">
        <div className={`card border-4   p-8 rounded-4xl text-white`}>
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
    </BorderGlow>
  );
};

export default QuizCard;
