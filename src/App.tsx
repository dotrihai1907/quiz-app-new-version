import Error from "./components/Error";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";
import { STATUS } from "./components/constant";
import { useQuiz } from "./contexts/QuizContext";

const { ERROR, READY, LOADING, ACTIVE, FINISHED } = STATUS;

function App() {
  const { status, answer } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === LOADING && <Loader />}
        {status === ERROR && <Error />}
        {status === READY && <StartScreen />}
        {status === ACTIVE && (
          <>
            <ProgressBar />
            <Question />
            <Footer>
              <Timer />
              {answer !== null && <NextButton />}
            </Footer>
          </>
        )}
        {status === FINISHED && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
