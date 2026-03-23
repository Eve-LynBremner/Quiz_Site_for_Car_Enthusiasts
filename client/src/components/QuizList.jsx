import React, { useState, useEffect } from "react";
import api from "../api";
import QuizCard from "./QuizCard";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/api/quizzes");

        console.log("quizzes", response.data);

        setQuizzes(response.data);
      } catch (error) {
        console.error("Failed to fetch quizzes", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>All Courses</h2>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizList;
