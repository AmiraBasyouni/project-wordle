import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// importing React Component
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [pastGuesses, setPastGuesses] = React.useState([]);
	return (
		<>
			<GuessResults
				pastGuesses={pastGuesses}
				answer={answer}
			/>
			<GuessInput
				pastGuesses={pastGuesses}
				setPastGuesses={setPastGuesses}
			/>
		</>
	);
}

export default Game;
