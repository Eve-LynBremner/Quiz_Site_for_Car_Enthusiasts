/* eslint-disable react/prop-types */
const QuizQuestion = ({ question, onAnswerChange }) => {
  if (question.image) {
    console.log(`Loading image for Q#${question.id}:`, question.image);
  }
  return (
    <div className="card bg-gray-900 justify-center p-5 flex flex-col items-center align-middle w-250">
      <div>Question Number: {question.id}</div>
      <div>Question: {question.question}</div>

      {question.image && (
        <div className="mb-4">
          <img
            src={question.image}
            alt="Quiz context"
            className="max-w-40 h-auto rounded-md border "
          />
        </div>
      )}

      <select
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
        className="text-black bg-amber-50 w-100"
      >
        <option value="" className="text-black bg-gray-100">
          Select an answer
        </option>
        {question.options.map((fruit, index) => (
          <option key={index} value={fruit} className="text-black">
            {fruit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizQuestion;
