import React from "react";

function GuessInput() {
	[guess, setGuess] = React.useState("");
	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault();
				console.log({guess:guess});
				setGuess("");
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
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
