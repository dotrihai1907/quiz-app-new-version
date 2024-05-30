import { ACTION_TYPE } from "./constant";
import { ActionType } from "./model";

export type StartScreenProps = {
  numQues: number;
  dispatch: React.Dispatch<ActionType>;
};

const { START } = ACTION_TYPE;

const StartScreen = ({ numQues, dispatch }: StartScreenProps) => {
  const handleStart = () => {
    dispatch({ type: START });
  };

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQues} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
