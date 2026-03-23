/* eslint-disable react/prop-types */
const QuizQuestion = ({ question, onAnswerChange }) => {
  return (
    <div className="card bg-gray-900">
      <div>Course Number: {question.id}</div>
      <div>Question: {question.question}</div>
      <select onChange={(e) => onAnswerChange(question.id, e.target.value)}>
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
