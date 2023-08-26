import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  totalPoints,
  answer,
}) {
  //   const progressBar = answer !== null ? index + 1 : index;
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
