import React from "react";

function PreviousGuesses({ pastGuesses }) {
	return (
		<div className="guess-results">
			{pastGuesses.map(({guess, key}) => (
				<p className="guess" key={key}>{guess}</p>
			))}
		</div>
	);
}

export default PreviousGuesses;
