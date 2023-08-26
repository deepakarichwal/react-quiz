import React from "react";
import { useQuiz } from "../contexts/QuizProvider";

export default function NextButton() {
  const { dispatch, answer } = useQuiz();

  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
