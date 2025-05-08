import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

/* Pick a random word on every pageload. */
const answer = sample(WORDS);
/* To make debugging easier, we'll log the solution in the console. */
console.info({ answer });

function Game() {
  const [guessLog, setGuessLog] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inProgress");
  // possible-values: inProgress, won, lost

  function hasCorrectGuess(guess) {
    return guess === answer;
  }
  function hasMaxNumOfAttempts(numOfAttempts) {
    return numOfAttempts >= NUM_OF_GUESSES_ALLOWED;
  }
  function updateGameStatus(guess, numOfAttempts) {
    if (hasCorrectGuess(guess)) {
      setGameStatus("won");
    }
    if (hasMaxNumOfAttempts(numOfAttempts) && !hasCorrectGuess(guess)) {
      setGameStatus("lost");
    }
  }
  function appendToGuessLog(guess) {
    const nextGuessLog = [...guessLog, guess];
    setGuessLog(nextGuessLog);
    updateGameStatus(guess, nextGuessLog.length);
  }

  return (
    <>
      <GuessLog guessLog={guessLog} answer={answer} />
      <GuessInput
        appendToGuessLog={appendToGuessLog}
        answer={answer}
        gameIsOver={gameStatus !== "inProgress"}
      />
      {gameStatus === "won" && <HappyBanner numOfTries={guessLog.length} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
