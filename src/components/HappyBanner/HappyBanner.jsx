import React from "react";

import Banner from "../Banner";
import { GameContext } from "../GameProvider";

function HappyBanner({ numOfTries }) {
  const { resetGame } = React.useContext(GameContext);
  return (
    <Banner banner_type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {` ${numOfTries} `} guess{numOfTries > 1 ? "es" : ""}
        </strong>
        .
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

export default HappyBanner;
