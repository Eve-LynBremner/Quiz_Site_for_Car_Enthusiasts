const QuizQuestion = ({ question }) => {
  return (
    <div className="card">
      <div className="">Course Number: {question.id}</div>
      <div className="">Question: {question.question}</div>
      <select>
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
