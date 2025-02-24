import React from "react";

function GuessInput({ pastGuesses, setPastGuesses }) {
	[guess, setGuess] = React.useState("");
	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault();
				console.info({ guess });
				newPastGuesses = [...pastGuesses];
				newPastGuesses.push({
					guess,
					key: Math.random(),
				});
				setPastGuesses(newPastGuesses);
				setGuess("");
			}}
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
