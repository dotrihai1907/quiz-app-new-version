import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
  const { points, maxPoints, highscore, handleRestart } = useQuiz();

  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji = "";

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "😳";
  if (percentage === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
