import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS } from "../../constants";

function Guess({ guess }) {
  const IS_GUESS_EMPTY = guess === "";

  /* Render each guess letter. If guess is empty, render a row of empty cells. */
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS).map((i) => (
        <span key={i} className="cell">
          {IS_GUESS_EMPTY ? undefined : guess[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
