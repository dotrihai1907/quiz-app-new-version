import { ACTION_TYPE } from "./constant";
import { ActionType } from "./model";

export type NextButtonProps = {
  numQues: number;
  curQuestion: number;
  dispatch: React.Dispatch<ActionType>;
};

const { NEXT_QUESTION, FINISH } = ACTION_TYPE;

const NextButton = (props: NextButtonProps) => {
  const { curQuestion, numQues, dispatch } = props;

  const handleNextQuestion = () => {
    curQuestion < numQues - 1
      ? dispatch({ type: NEXT_QUESTION })
      : dispatch({ type: FINISH });
  };

  return (
    <button className="btn btn-ui" onClick={handleNextQuestion}>
      {curQuestion < numQues - 1 ? "Next" : "Finish"}
    </button>
  );
};

export default NextButton;
