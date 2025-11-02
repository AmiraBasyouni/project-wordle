import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const GameContext = React.createContext();

function getKeyboard() {
  const ALPHABET = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const keyboard = {};
  ALPHABET.forEach((row) => {
    row.forEach((letter) => {
      keyboard[letter] = "unknown";
    });
  });
  return keyboard;
}

function GameProvider({ children }) {
  const [keyboardStatus, setKeyboardStatus] = React.useState(() =>
    getKeyboard()
  );
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guess, setGuess] = React.useState("");
  const [guessLog, setGuessLog] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inProgress");
  // gameStatus: 'inProgress' | 'won' | 'lost'

  /* To make debugging easier, we'll log the solution in the console. */
  React.useEffect(() => console.info({ answer }), [answer]);

  function generateNewAnswer() {
    setAnswer(sample(WORDS));
  }

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
    function resetKeyboard() {
      setKeyboardStatus(getKeyboard());
    }
    function resetGame() {
      setGuess("");
      setGuessLog([]);
      resetKeyboard();
      setGameStatus("inProgress");
      generateNewAnswer();
    }

    return {
      guess,
      setGuess,
      answer,
      guessLog,
      gameStatus,
      appendToGuessLog,
      keyboardStatus,
      setKeyboardStatus,
      resetGame,
    };
  }, [guessLog, gameStatus, guess, answer, keyboardStatus]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
