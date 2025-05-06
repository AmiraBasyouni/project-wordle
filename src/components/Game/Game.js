import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessLog, setGuessLog] = React.useState([]);
	
  return (
    <>
      <GuessLog guessLog={guessLog} />
      <GuessInput guessLog={guessLog} setGuessLog={setGuessLog} />
    </>
  );
}

export default Game;
