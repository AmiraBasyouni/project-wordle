import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

/* Pick a random word on every pageload. */
const answer = sample(WORDS);
/* To make debugging easier, we'll log the solution in the console. */
console.info({ answer });

export const GameContext = React.createContext();

function GameProvider({ children }) {
  const [guess, setGuess] = React.useState("");
  const [guessLog, setGuessLog] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inProgress");
  // gameStatus: 'inProgress' | 'won' | 'lost'

  const value = React.useMemo(() => {
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

    return {
      guess,
      setGuess,
      answer,
      guessLog,
      gameStatus,
      appendToGuessLog,
      NUM_OF_GUESSES_ALLOWED,
    };
  }, [guessLog, gameStatus, guess]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
