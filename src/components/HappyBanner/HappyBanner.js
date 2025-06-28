import React from "react";

import Banner from "../Banner";
import { GameContext } from "../GameProvider";

function HappyBanner() {
  const { guessLog } = React.useContext(GameContext);
  return (
    <Banner banner_type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {` ${guessLog.length} `} guess{guessLog.length > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
