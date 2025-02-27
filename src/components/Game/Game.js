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
	const [guessHistory, setGuessHistory] = React.useState([]);
	const [endGameResult, setEndGameResult] = React.useState("inProgress"); // inProgress, win, lose
	return (
		<>
			<GuessResults
				guessHistory={guessHistory} // renders user's guesses
				answer={answer} // answer to check correctness of each letter on render
			/>
			<GuessInput
				guessHistory={guessHistory} // makes a copy of guessHistory to update the state
				setGuessHistory={setGuessHistory} // updates guessHistory after every form submission
				setEndGameResult={setEndGameResult}
				answer={answer} // answer to check if end of game is reached
			/>
			{endGameResult === "inProgress" ? undefined : (
				<GameOverBanner
					win={endGameResult === "win"}
					numOfAttempts={guessHistory.length} // helps render win message
					answer={answer} // answer rendered when user loses
				/>
			)}
		</>
	);
}

export default Game;
