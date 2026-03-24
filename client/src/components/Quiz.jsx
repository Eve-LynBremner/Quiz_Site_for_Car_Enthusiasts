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
        quizId: Number(quizid),
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
      <div className="flex flex-col max-width mx-auto items-center gap-4 text-white">
        {chosenQuiz.map((question) => (
          <QuizQuestion
            key={question.id}
            question={question}
            onAnswerChange={handleAnswerChange}
          />
        ))}

        <button
          onClick={handleSubmit}
          className="px-20 py-8 text-2xl md:text-3xl border text-gray-500 bg-white border-white/20 transition-all duration-300 font-bold  hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:box-transition-all uppercase tracking-tighter"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
