import React from "react";

function GuessLog({ guessLog }) {

  return (
    <div className="guess-results">
      {guessLog.map((guess, index) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default GuessLog;
