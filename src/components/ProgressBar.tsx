import { useQuiz } from "../contexts/QuizContext";

const ProgressBar = () => {
  const { questions, curQuestion, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={curQuestion + Number(answer !== null)}
      />
      <p>
        Question <strong>{curQuestion + 1}</strong> / {questions.length}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
};

export default ProgressBar;
