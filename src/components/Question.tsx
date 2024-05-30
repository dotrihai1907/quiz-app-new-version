import { ACTION_TYPE } from "./constant";
import { ActionType, QuestionType } from "./model";

export type QuestionProps = {
  question: QuestionType;
  answer: number | null;
  dispatch: React.Dispatch<ActionType>;
};

const { ANSWER } = ACTION_TYPE;

const Question = (props: QuestionProps) => {
  const { question, answer, dispatch } = props;

  const isAnswered = answer !== null;

  const handleAnswer = (answer: number) => {
    dispatch({ type: ANSWER, payload: answer });
  };

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
