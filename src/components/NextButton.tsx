import { useQuiz } from "../contexts/QuizContext";

const NextButton = () => {
  const { curQuestion, questions, handleNextQuestion, handleFinish } =
    useQuiz();

  const handleClick = () => {
    curQuestion < questions.length - 1 ? handleNextQuestion() : handleFinish();
  };

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      {curQuestion < questions.length - 1 ? "Next" : "Finish"}
    </button>
  );
};

export default NextButton;
