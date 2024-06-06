import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
  const { questions, curQuestion, answer, handleAnswer } = useQuiz();

  const isAnswered = answer !== null;
  const question = questions[curQuestion];

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={opt}
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              isAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleAnswer(i)}
            disabled={isAnswered}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
