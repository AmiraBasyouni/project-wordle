import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessInput({
	guessHistory,
	setGuessHistory,
	setEndGameResult,
	answer,
}) {
	const [guess, setGuess] = React.useState("");
	const [inputDisabled, setInputDisabled] = React.useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		//console.info({ guess });

		// update guess history
		const newGuessHistory = [...guessHistory];
		newGuessHistory.push({
			guess,
			id: Math.random(),
		});
		console.log(newGuessHistory);
		setGuessHistory(newGuessHistory);

		// reset input value
		setGuess("");

		// EndGame check
		if (guess === answer) {
			setEndGameResult("win");
			setInputDisabled(true);
		} else if (newGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
			setEndGameResult("lose");
			setInputDisabled(true);
			return;
		}
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => handleSubmit(event)}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				disabled={inputDisabled}
				id="guess-input"
				type="text"
				pattern="[A-Z]{5}"
				value={guess}
				onChange={(event) =>
					setGuess(
						event.target.value.toUpperCase()
					)
				}
			/>
		</form>
	);
}

export default GuessInput;
