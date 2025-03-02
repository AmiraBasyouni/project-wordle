import React from "react";

import { LETTERS } from "../../data.js";

function VisualKeyboard({ keyboardStatus }) {
	return LETTERS.map((row) => (
		<p className="guess" key={Math.random()}>
			{Object.keys(row).map((letter) => (
				<span
					className={`cell ${keyboardStatus[letter]}`}
					key={Math.random()}
				>
					{letter}
				</span>
			))}
		</p>
	));
}

export default VisualKeyboard;
