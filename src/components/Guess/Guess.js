import React from "react";
import { range } from "../../utils";

function Guess({ guess = "" }) {
	return (
		<p className="guess">
			{range(5).map((i) => (
				<span className="cell" key={i}>
					{guess.length > 0
						? guess[i]
						: undefined}
				</span>
			))}
		</p>
	);
}

export default Guess;
