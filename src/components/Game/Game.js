import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// importing React Component
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	[pastGuesses, setPastGuesses] = React.useState([]);
	return (
		<>
			<PreviousGuesses pastGuesses={pastGuesses} />
			<GuessInput pastGuesses={pastGuesses} setPastGuesses={setPastGuesses} />
		</>
	);
}

export default Game;
