import React from "react";
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

import { GameContext } from "../GameProvider";

function Game() {
  const { guessLog, gameStatus } = React.useContext(GameContext);
  return (
    <>
      <GuessLog />
      <GuessInput gameIsOver={gameStatus !== "inProgress"} />
      {gameStatus === "won" && <HappyBanner numOfTries={guessLog.length} />}
      {gameStatus === "lost" && <SadBanner />}
    </>
  );
}

export default Game;
