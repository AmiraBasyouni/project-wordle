import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess = "", answer }) {
	function styleLetterResult(guess, answer, i) {
		if (guess === "") {
			return "cell";
		}
		return `cell ${checkGuess(guess, answer)[i]["status"]}`;
	}
	return (
		<p className="guess">
			{range(5).map((i) => (
				<span
					className={styleLetterResult(
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
