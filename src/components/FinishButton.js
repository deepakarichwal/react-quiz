import React from "react";
import { useQuiz } from "../contexts/QuizProvider";

export default function FinishButton() {
  const { answer, dispatch } = useQuiz();

  if (answer === null) return null;
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}
