import React from "react";

export default function Finished({ points, totalPoints, highScore, dispatch }) {
  const percentage = Math.round((points / totalPoints) * 100);

  // const curScore = points;
  // const highestScore = curScore > points ? points : curScore;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage > 90) emoji = "🥈";
  if (percentage < 90 && percentage > 70) emoji = "🥉";
  if (percentage < 70 && percentage > 50) emoji = "😁";
  if (percentage < 50 && percentage > 30) emoji = "🙂";
  if (percentage < 30 && percentage > 10) emoji = "😟";
  if (percentage < 10 && percentage >= 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highest score is {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset", payload: true })}
      >
        Restart Quiz
      </button>
    </>
  );
}
