export type ReactQuizType = {
  questions: QuestionType[];
  status: string;
  curQuestion: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
};

export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type ActionType = {
  type: string;
  payload?: QuestionType[] | number;
};
