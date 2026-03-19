/* eslint-disable react/prop-types */
const QuizQuestion = ({ question, onAnswerChange }) => {
  return (
    <div className="card">
      <div className="text-black">Course Number: {question.id}</div>
      <div className="text-black">Question: {question.question}</div>
      <select
        className="text-black"
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
      >
        <option value="">Select an answer</option>
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
