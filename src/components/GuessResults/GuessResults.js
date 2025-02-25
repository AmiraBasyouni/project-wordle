import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

import Guess from "../Guess";

function GuessResults({ pastGuesses }) {
	return (
		<div className="guess-results">
			{
				// render user's guesses
				pastGuesses.map(({ guess, id }) => (
					<Guess guess={guess} key={id} />
				))
			}
			{
				// render remaining guesses allowed
				range(
					NUM_OF_GUESSES_ALLOWED -
						pastGuesses.length
				).map(() => (
					<Guess key={Math.random()} />
				))
			}
		</div>
	);
}

export default GuessResults;
