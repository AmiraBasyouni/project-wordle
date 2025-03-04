import React from "react";

// win: boolean
// numOfAttempts: integer
// answer: string
function GameOverBanner({ win, numOfAttempts, answer, playAgainHandler }) {
	function winBanner(num) {
		return (
			<p>
				<strong>Congratulations!</strong> Got it in{" "}
				<strong>
					{numOfAttempts} guess
					{numOfAttempts > 1 ? "es" : undefined}
				</strong>
				.
			</p>
		);
	}
	function loseBanner() {
		return (
			<p>
				Sorry, the correct answer is{" "}
				<strong>{answer}</strong>.
			</p>
		);
	}
	return (
		<div className={win ? "happy banner" : "sad banner"}>
			{win ? winBanner() : loseBanner()}
			<p>
				click{" "}
				<button onClick={playAgainHandler}>here</button>{" "}
				to play again!
			</p>
		</div>
	);
}

export default GameOverBanner;
