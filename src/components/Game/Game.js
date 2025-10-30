import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import VisualKeyboard from "../VisualKeyboard";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

import { GameContext } from "../GameProvider";

const ALPHABET = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
const keyboard = {};

function Game() {
  const { guessLog, gameStatus } = React.useContext(GameContext);
  const [keyboardStatus, setKeyboardStatus] = React.useState(() => {
    ALPHABET.forEach((row) => {
      row.forEach((letter) => {
        keyboard[letter] = "unknown";
      });
    });
    return keyboard;
  });
  return (
    <>
      <GuessLog />
      <GuessInput
        gameIsOver={gameStatus !== "inProgress"}
        keyboardStatus={keyboardStatus}
        setKeyboardStatus={setKeyboardStatus}
      />
      <VisualKeyboard keyboardStatus={keyboardStatus} />
      {gameStatus === "won" && <HappyBanner numOfTries={guessLog.length} />}
      {gameStatus === "lost" && <SadBanner />}
    </>
  );
}

export default Game;
