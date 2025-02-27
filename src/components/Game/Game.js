import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// importing React Component
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [pastGuesses, setPastGuesses] = React.useState([]);
	const [endGameResult, setEndGameResult] = React.useState("inProgress"); // inProgress, win, lose
	return (
		<>
			<GuessResults
				pastGuesses={pastGuesses}
				answer={answer} // answer to check correctness of each letter on render
			/>
			<GuessInput
				pastGuesses={pastGuesses}
				setPastGuesses={setPastGuesses}
				setEndGameResult={setEndGameResult}
				answer={answer} // answer to check if end of game is reached
			/>
			{endGameResult === "inProgress" ? undefined : (
				<GameOverBanner
					win={endGameResult === "win"}
					numOfAttempts={pastGuesses.length}
					answer={answer} // answer rendered when user loses
				/>
			)}
		</>
	);
}

export default Game;
