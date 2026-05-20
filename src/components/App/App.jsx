import React from "react";

import Game from "../Game";
import Header from "../Header";
import TutorialDialog from "../TutorialDialog";

import GameProvider from "../GameProvider";

function App() {
  return (
    <>
      <TutorialDialog />
      <GameProvider>
        <div className="wrapper">
          <Header />
          <div className="game-wrapper">
            <Game />
          </div>
        </div>
      </GameProvider>
    </>
  );
}

export default App;
