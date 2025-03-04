import React from "react";

import { LETTERS } from "../../data.js";

function VisualKeyboard({ keyboardStatus }) {
	return (
		<div className="keyboard">
			{LETTERS.map((row) => (
				<p className="keyboard-row" key={Math.random()}>
					{Object.keys(row).map((letter) => (
						<span
							className={`key ${keyboardStatus[letter]}`}
							key={Math.random()}
						>
							{letter}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default VisualKeyboard;
