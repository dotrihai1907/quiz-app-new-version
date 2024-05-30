export type ProgressBarProps = {
  numQues: number;
  curQuestion: number;
  points: number;
  maxPoints: number;
  answer: number | null;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { numQues, curQuestion, points, maxPoints, answer } = props;
  return (
    <header className="progress">
      <progress max={numQues} value={curQuestion + Number(answer !== null)} />
      <p>
        Question <strong>{curQuestion + 1}</strong> / {numQues}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
};

export default ProgressBar;
