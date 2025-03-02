import React from "react";

import { sample } from "../../utils";
import { WORDS, LETTERS } from "../../data";

// importing React Component
import GuessInput from "../GuessInput";
import RenderGuessHistory from "../RenderGuessHistory";
import GameOverBanner from "../GameOverBanner";
import VisualKeyboard from "../VisualKeyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessHistory, setGuessHistory] = React.useState([]);
	const [endGameResult, setEndGameResult] = React.useState("inProgress"); // values: inProgress, win, lose
	const [keyboardStatus, setKeyboardStatus] = React.useState({
		// row_1, row_2, row_3
		...LETTERS[0],
		...LETTERS[1],
		...LETTERS[2],
	});
	return (
		<>
			<RenderGuessHistory
				guessHistory={guessHistory} // renders user's guesses
				answer={answer} // answer to check correctness of each letter on render
			/>
			<GuessInput
				guessHistory={guessHistory} // makes a copy of guessHistory to update the state
				setGuessHistory={setGuessHistory} // updates guessHistory after every form submission
				setEndGameResult={setEndGameResult}
				answer={answer} // answer to check if end of game is reached
				keyboardStatus={keyboardStatus}
				setKeyboardStatus={setKeyboardStatus}
			/>
			<VisualKeyboard keyboardStatus={keyboardStatus} />
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
