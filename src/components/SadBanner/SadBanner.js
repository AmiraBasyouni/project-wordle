import React from "react";

import Banner from "../Banner";
import { GameContext } from "../GameProvider";

function SadBanner() {
  const { answer } = React.useContext(GameContext);
  return (
    <Banner bannerType="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default SadBanner;
