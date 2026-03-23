/* eslint-disable react/prop-types */
const QuizQuestion = ({ question, onAnswerChange }) => {
  return (
    <div className="card bg-gray-900">
      <div>Course Number: {question.id}</div>
      <div>Question: {question.question}</div>

      {question.image && (
        <div className="mb-4">
          <img
            src={question.image}
            alt="Quiz context"
            className="max-w-full h-auto rounded-md border border-gray-600"
          />
        </div>
      )}

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
