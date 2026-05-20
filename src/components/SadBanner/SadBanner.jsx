import React from "react";

import Banner from "../Banner";
import { GameContext } from "../GameProvider";

function SadBanner() {
  const { answer, resetGame } = React.useContext(GameContext);
  return (
    <Banner banner_type="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <p>
        Click{" "}
        <button onClick={resetGame}>
          <u>here</u>
        </button>{" "}
        to play again.
      </p>
    </Banner>
  );
}

export default SadBanner;
