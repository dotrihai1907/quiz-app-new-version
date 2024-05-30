import {
  ACTION_TYPE,
  INIT_STATE,
  SECONDS_PER_QUESTION,
  STATUS,
} from "./components/constant";
import { ActionType, QuestionType, ReactQuizType } from "./components/model";

const {
  FETCH_SUCCESS,
  FETCH_FAILED,
  START,
  ANSWER,
  NEXT_QUESTION,
  FINISH,
  RESTART,
  TICK,
} = ACTION_TYPE;
const { READY, ERROR, ACTIVE, FINISHED } = STATUS;

export const reducer = (state: ReactQuizType, action: ActionType) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        questions: action?.payload as QuestionType[],
        status: READY,
      };
    case FETCH_FAILED:
      return { ...state, questions: [] as QuestionType[], status: ERROR };
    case START:
      return {
        ...state,
        status: ACTIVE,
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case ANSWER:
      const question = state.questions[state.curQuestion];
      const addPoint =
        question.correctOption === action.payload ? question.points : 0;
      return {
        ...state,
        answer: action.payload as number,
        points: state.points + addPoint,
      };
    case NEXT_QUESTION:
      return { ...state, curQuestion: state.curQuestion + 1, answer: null };

    case FINISH:
      return {
        ...state,
        status: FINISHED,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case RESTART:
      return {
        ...INIT_STATE,
        status: READY,
        questions: state.questions,
        highscore: state.highscore,
      };
    case TICK:
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? FINISH : state.status,
      };
    default:
      throw new Error("Invalid action type");
  }
};
