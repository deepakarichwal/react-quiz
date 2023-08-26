import { useEffect } from "react";

export default function Timer({ secRem, dispatch }) {
  const mins = Math.floor(secRem / 60);
  const secs = secRem % 60;

  if (mins < 10) {
  }

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
}
