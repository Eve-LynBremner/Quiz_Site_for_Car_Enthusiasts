import QuizQuestion from "./QuizQuestion";
import api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useSession } from "../contexts/SessionContext";
const Quiz = () => {
  const { user } = useSession();
  const [chosenQuiz, setChosenQuiz] = useState([]);
  const { quizid } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get(`/api/questions/${quizid}`);
        console.log("chosenQuiz", response.data.questions);
        setChosenQuiz(response.data.questions);
      } catch (error) {
        console.error("Failed to fetch chosenQuiz", error);
      }
    };

    fetchCourses();
  }, []);

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;

    chosenQuiz.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    console.log(`Score: ${score}/${chosenQuiz.length}`);

    try {
      const response = await api.post("/api/leaders", {
        score: score,
        userId: user.id,
        quizId: quizid,
      });
      const data = response.data;
      // Update the user in the context

      toast.success(`Score: ${score}/${chosenQuiz.length}`);
    } catch (error) {
      console.error("Signup failed", error);
      toast.error("Quiz Submiy Failed");
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      <div className="flex flex-col gap-4 text-white">
        {chosenQuiz.map((question) => (
          <QuizQuestion
            key={question.id}
            question={question}
            onAnswerChange={handleAnswerChange}
          />
        ))}

        <button onClick={handleSubmit} className="bg-green-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
