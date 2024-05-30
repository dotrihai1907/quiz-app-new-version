import { ACTION_TYPE } from "./constant";
import { ActionType } from "./model";

export type FinishScreenProps = {
  points: number;
  maxPoints: number;
  highscore: number;
  dispatch: React.Dispatch<ActionType>;
};

const { RESTART } = ACTION_TYPE;

const FinishScreen = (props: FinishScreenProps) => {
  const { points, maxPoints, highscore, dispatch } = props;

  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji = "";

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "😳";
  if (percentage === 0) emoji = "🤦";

  const handleRestart = () => {
    dispatch({ type: RESTART });
  };

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
