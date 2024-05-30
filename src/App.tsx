import { useEffect, useMemo, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import {
  ACTION_TYPE,
  FETCH_API,
  INIT_STATE,
  STATUS,
} from "./components/constant";
import { reducer } from "./util";
import Error from "./components/Error";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const { FETCH_SUCCESS, FETCH_FAILED } = ACTION_TYPE;
const { ERROR, READY, LOADING, ACTIVE, FINISHED } = STATUS;

function App() {
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

  return (
    <div className="app">
      <Header />
      <Main>
        {status === LOADING && <Loader />}
        {status === ERROR && <Error />}
        {status === READY && (
          <StartScreen numQues={questions.length} dispatch={dispatch} />
        )}
        {status === ACTIVE && (
          <>
            <ProgressBar
              numQues={questions.length}
              curQuestion={curQuestion}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[curQuestion]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              {answer !== null && (
                <NextButton
                  dispatch={dispatch}
                  numQues={questions.length}
                  curQuestion={curQuestion}
                />
              )}
            </Footer>
          </>
        )}
        {status === FINISHED && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
