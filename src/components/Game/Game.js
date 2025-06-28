import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

import { GameContext } from "GameProvider";

function Game() {
  const { guessLog, answer, appendToGuessLog, gameStatus } =
    React.useContext(GameContext);
  return (
    <>
      <GuessLog />
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
