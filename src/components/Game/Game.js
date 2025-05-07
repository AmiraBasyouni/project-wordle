import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";


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
