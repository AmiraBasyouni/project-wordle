import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { NUM_OF_LETTERS } from "../../constants";

import { GameContext } from "../GameProvider";

function Guess() {
  const { guess, answer } = React.useContext(GameContext);
  const letter_status = checkGuess(guess, answer);

  function fetchStatus(i) {
    return guess ? ` ${letter_status[i]["status"]}` : "";
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
