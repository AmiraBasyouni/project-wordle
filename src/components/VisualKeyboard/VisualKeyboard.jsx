import React from "react";

import { LETTERS } from "../../data.js";

function VisualKeyboard({ keyboardStatus }) {
  return (
    // keyboard
    <div className="guess-results">
      {LETTERS.map((row) => (
        // keyboard row
        <p className="guess" key={Math.random()}>
          {Object.keys(row).map((letter) => (
            <span
              // key
              className={`cell ${keyboardStatus[letter]}`}
              key={Math.random()}
            >
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default VisualKeyboard;
