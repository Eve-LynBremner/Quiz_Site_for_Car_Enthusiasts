import QuizQuestion from "./QuizQuestion";
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
  return (
    <div>
      <h2>Quiz</h2>
      <div className="flex flex-col gap-4">
        {questions.map((question) => (
          <QuizQuestion key={question.id} question={question} />
        ))}

        <button className="bg-green-500">Submit</button>
      </div>
    </div>
  );
};

export default Quiz;
