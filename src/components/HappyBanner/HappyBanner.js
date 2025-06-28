import React from "react";

import Banner from "../Banner";
import { GameContext } from "../GameProvider";

function HappyBanner() {
  const { guessLog } = React.useContext(GameContext);
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{` ${guessLog.length} `} guesses</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
