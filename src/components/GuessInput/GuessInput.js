import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ guessLog, setGuessLog }) {
  const [guess, setGuess] = React.useState("");

  function updateGuessLog() {
    const nextGuessLog = [...guessLog, guess];
    setGuessLog(nextGuessLog);
  }
  function handleSubmit(event) {
    event.preventDefault();
    updateGuessLog();
    console.info({ guess });
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
