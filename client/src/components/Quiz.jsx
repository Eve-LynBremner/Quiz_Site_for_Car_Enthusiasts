import QuizQuestion from "./QuizQuestion";
import { useState } from "react";
const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "Which company manufactures the Civic?",
      options: ["Honda", "Toyota", "Nissan", "Mazda"],
      answer: "Honda",
      category: "Brands",
      difficulty: "easy",
      image: null,
    },
    {
      id: 2,
      question: "Which brand is known for the 911 sports car?",
      options: ["Porsche", "Audi", "BMW", "Mercedes-Benz"],
      answer: "Porsche",
      category: "Brands",
      difficulty: "easy",
      image: null,
    },
    {
      id: 3,
      question: "Which company manufactures the Civic?",
      options: ["Honda", "Toyota", "Nissan", "Mazda"],
      answer: "Honda",
      category: "Brands",
      difficulty: "easy",
      image: null,
    },
    {
      id: 4,
      question: "Which brand is known for the 911 sports car?",
      options: ["Porsche", "Audi", "BMW", "Mercedes-Benz"],
      answer: "Porsche",
      category: "Brands",
      difficulty: "easy",
      image: null,
    },
  ];

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    console.log(`Score: ${score}/${questions.length}`);
  };

  return (
    <div>
      <h2>Quiz</h2>
      <div className="flex flex-col gap-4">
        {questions.map((question) => (
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
