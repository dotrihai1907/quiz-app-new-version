import { ReactQuizType } from "./model";

export const FETCH_API = "http://localhost:8000/questions";

export const SECONDS_PER_QUESTION = 30;

export const INIT_STATE: ReactQuizType = {
  questions: [],
  status: "loading",
  curQuestion: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

export const STATUS = {
  LOADING: "loading",
  ERROR: "error",
  READY: "ready",
  ACTIVE: "active",
  FINISHED: "finished",
};

export const ACTION_TYPE = {
  FETCH_SUCCESS: "fetch-success",
  FETCH_FAILED: "fetch-failed",
  START: "start",
  ANSWER: "answer",
  NEXT_QUESTION: "next-question",
  FINISH: "finish",
  RESTART: "restart",
  TICK: "tick",
};
