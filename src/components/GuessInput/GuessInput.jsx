import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

import { GameContext } from "../GameProvider";
//import { useStyleKeyboard } from "../../hooks/useStyleKeyboard";
import { checkGuess } from "../../game-helpers";

function GuessInput({ gameIsOver, keyboardStatus, setKeyboardStatus }) {
  const { guess, setGuess, appendToGuessLog, answer } =
    React.useContext(GameContext);

  function styleKeyboard() {
    if (guess === "") {
      return "cell";
    }

    const newKeyboardStatus = { ...keyboardStatus };
    // for each letter in the keyboard,
    // update its status based on
    // the correctness of the user's guess
    for (let i = 0; i < guess.length; i++) {
      const letterGuessedAtI = guess[i];
      const letterStatus = checkGuess(guess, answer)[i]["status"];

      // check if a status update for this key is needed
      if (
        keyboardStatus[letterGuessedAtI] === "unknown" ||
        keyboardStatus[letterGuessedAtI] === "misplaced" ||
        keyboardStatus[letterGuessedAtI] === "incorrect"
      ) {
        // update key's status
        newKeyboardStatus[letterGuessedAtI] = letterStatus;
      }
    }
    setKeyboardStatus(newKeyboardStatus);
  }

  function handleSubmit(e) {
    e.preventDefault();
    appendToGuessLog(guess);
    console.info({ guess });
    styleKeyboard();
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
