import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess = "", answer }) {
	function styleLetter(guess, answer, i) {
		if (guess === "") {
			return "cell";
		}
		const letterStatus = checkGuess(guess, answer)[i]["status"];

		return `cell ${letterStatus}`;
	}
	return (
		<p className="guess">
			{range(5).map((i) => (
				<span
					className={styleLetter(
						guess,
						answer,
						i
					)}
					key={i}
				>
					{guess.length > 0
						? guess[i]
						: undefined}
				</span>
			))}
		</p>
	);
}

export default Guess;
