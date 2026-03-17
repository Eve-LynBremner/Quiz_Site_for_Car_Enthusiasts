const QuizQuestion = ({ question }) => {
  return (
    <div className="card">
      <div className="card-title">Course Number: {question.id}</div>
      <div className="card-description">Question: {question.question}</div>
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
