import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function GuessInput({
	guessHistory,
	setGuessHistory,
	setEndGameResult,
	answer,
	keyboardStatus,
	setKeyboardStatus,
	inputDisabled,
	setInputDisabled,
}) {
	const [guess, setGuess] = React.useState("");

	function styleKeyboard() {
		if (guess === "") {
			return "cell";
		}

		const newKeyboardStatus = { ...keyboardStatus };
		// for each letter in the keyboard,
		// update its status based on
		// the correctness of the user's guess
		for (let i = 0; i < guess.length; i++) {
			const letterGuessedAtI = guess[i];
			const letterStatus = checkGuess(guess, answer)[i][
				"status"
			];

			// check if a status update for this key is needed
			if (
				keyboardStatus[letterGuessedAtI] ===
					"unknown" ||
				keyboardStatus[letterGuessedAtI] ===
					"misplaced" ||
				keyboardStatus[letterGuessedAtI] === "incorrect"
			) {
				// update key's status
				newKeyboardStatus[letterGuessedAtI] =
					letterStatus;
			}
		}
		setKeyboardStatus(newKeyboardStatus);
	}

	function handleSubmit(event) {
		event.preventDefault();
		//console.info({ guess });

		// update guess history
		const newGuessHistory = [...guessHistory];
		newGuessHistory.push({
			guess,
			id: Math.random(),
		});
		//console.log(newGuessHistory);
		setGuessHistory(newGuessHistory);

		// update visual keyboard
		styleKeyboard();

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
