import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { ACTION_TYPE, FETCH_API, INIT_STATE } from "../components/constant";
import { QuestionType } from "../components/model";
import { reducer } from "../reducer";

type QuizContextType = {
  status: string;
  questions: QuestionType[];
  curQuestion: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
  maxPoints: number;
  handleStart: () => void;
  handleAnswer: (answer: number) => void;
  handleTick: () => void;
  handleNextQuestion: () => void;
  handleFinish: () => void;
  handleRestart: () => void;
};

type QuizProviderType = {
  children: React.ReactNode;
};

const { FETCH_SUCCESS, FETCH_FAILED } = ACTION_TYPE;
const { START, ANSWER, TICK, NEXT_QUESTION, FINISH, RESTART } = ACTION_TYPE;

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const QuizProvider = ({ children }: QuizProviderType) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const {
    status,
    questions,
    curQuestion,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const maxPoints = useMemo(() => {
    return questions.reduce((point, question) => point + question.points, 0);
  }, [questions]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(FETCH_API);
        const data = await res.json();
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (err) {
        dispatch({ type: FETCH_FAILED });
      }
    };
    fetchQuestions();
  }, []);

  const handleStart = () => {
    dispatch({ type: START });
  };

  const handleAnswer = (answer: number) => {
    dispatch({ type: ANSWER, payload: answer });
  };

  const handleTick = () => {
    dispatch({ type: TICK });
  };

  const handleNextQuestion = () => {
    dispatch({ type: NEXT_QUESTION });
  };

  const handleFinish = () => {
    dispatch({ type: FINISH });
  };

  const handleRestart = () => {
    dispatch({ type: RESTART });
  };

  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        curQuestion,
        answer,
        points,
        highscore,
        secondsRemaining,
        maxPoints,
        handleStart,
        handleAnswer,
        handleTick,
        handleNextQuestion,
        handleFinish,
        handleRestart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
};

export { QuizProvider, useQuiz };
