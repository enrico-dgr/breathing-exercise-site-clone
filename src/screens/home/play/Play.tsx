import React from "react";

// styles
import "./style.css";

// types
import { BreathingType } from "../types";

// components
import Box from "./box/Box";
import Simple from "./simple/Simple";

type Props = {
	breathingType: BreathingType;
	onStop?: () => void;
};

type State = {
	play: boolean;
};

const Play = ({ breathingType, onStop }: Props) => {
	const [state, setState] = React.useState<State>({
		play: false,
	});

	const play = React.useCallback(
		() => setState((prev) => ({ ...prev, play: true })),
		[]
	);

	if (!state.play) {
		return (
			<div className="play_btn_container">
				<div onClick={play}>
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 24 24"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M7 6v12l10-6z"></path>
					</svg>
				</div>
				<div className="breathing_message">
					{breathingType === "simple" ? "Simple Breathing." : "Box Breathing."}
				</div>
			</div>
		);
	}

	return (
		<div className="play_container">
			{breathingType === "box" && <Box onStop={onStop} />}
			{breathingType === "simple" && <Simple onStop={onStop} />}
		</div>
	);
};

export default Play;
