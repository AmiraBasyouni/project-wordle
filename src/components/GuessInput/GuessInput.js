import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

import { GameContext } from "../GameProvider";

function GuessInput({ gameIsOver }) {
  const { guess, setGuess, appendToGuessLog } = React.useContext(GameContext);

  function handleSubmit(e) {
    e.preventDefault();
    appendToGuessLog(guess);
    console.info({ guess });
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameIsOver}
        required
        id="guess-input"
        type="text"
        pattern={`[A-Z]{${NUM_OF_LETTERS}}`}
        title="5 letter word"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
