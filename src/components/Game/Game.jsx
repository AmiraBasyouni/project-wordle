import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import VisualKeyboard from "../VisualKeyboard";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

import { GameContext } from "../GameProvider";

function Game() {
  const { guessLog, gameStatus, keyboardStatus, setKeyboardStatus } =
    React.useContext(GameContext);
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
