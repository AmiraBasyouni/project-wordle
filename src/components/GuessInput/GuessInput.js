import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessInput({ pastGuesses, setPastGuesses }) {
	const [guess, setGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		if (pastGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			window.alert("you have a maximum of 5 guesses");
			return;
		}

		console.info({ guess });
		const newPastGuesses = [...pastGuesses];
		newPastGuesses.push({
			guess,
			id: Math.random(),
		});
		console.log(newPastGuesses);
		setPastGuesses(newPastGuesses);
		setGuess("");
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => handleSubmit(event)}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
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
