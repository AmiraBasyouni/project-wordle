import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ appendToGuessLog, gameIsOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
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
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
