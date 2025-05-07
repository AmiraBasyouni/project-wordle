import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { NUM_OF_LETTERS } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

/* Pick a random word on every pageload. */
const answer = sample(WORDS);
/* To make debugging easier, we'll log the solution in the console. */
console.info({ answer });


function Guess({ guess }) {
  const letter_status = checkGuess(guess, answer);

  function fetchStatus(i) {
    return guess ? ` ${letter_status[i]["status"]}` : '';
  }

  /* Render each guess letter. If guess is empty, render a row of empty cells. */
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS).map((i) => (
        <span key={i} className={"cell" + fetchStatus(i)}>
          {guess ? guess[i] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
