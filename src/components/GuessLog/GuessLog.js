import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { GameContext } from "../GameProvider";

function GuessLog() {
  const { guessLog } = React.useContext(GameContext);

  /* render submitted guesses. For each guess remaining, render empty slots */
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guess={i < guessLog.length ? guessLog[i] : ""} />
      ))}
    </div>
  );
}

export default GuessLog;
