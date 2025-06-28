import React from "react";

import Banner from "../Banner";

function HappyBanner({ numOfTries }) {
  return (
    <Banner banner_type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {` ${numOfTries} `} guess{numOfTries > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
