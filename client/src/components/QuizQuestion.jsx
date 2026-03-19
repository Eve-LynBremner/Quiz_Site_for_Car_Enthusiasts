const QuizQuestion = ({ question }) => {
  return (
    <div className="card">
      <div className="text-black">Course Number: {question.id}</div>
      <div className="text-black">Question: {question.question}</div>
      <select className="text-black">
        {question.options.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizQuestion;
