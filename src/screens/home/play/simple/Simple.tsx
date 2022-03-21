import React from "react";

// audio
import breathInAudio from "../../../../assets/audio/breath-in.mp3";
import breathOutAudio from "../../../../assets/audio/breath-out.mp3";

// components
import StopButton from "../../../../components/stopButton/StopButton";
import Timer from "../../../../components/timer/Timer";

// styles
import "./style.css";

type Props = {
	onStop?: () => void;
};

type AnimationName = "breath-in" | "breath-out";
type TransitionName = "transition-in" | "transition-out";

type State = {
	animationName: "" | AnimationName;
	transitionName: "" | TransitionName;
	audio: {
		current: HTMLAudioElement | null;
	} & { [key in AnimationName]: HTMLAudioElement };
};

const Simple = ({ onStop }: Props) => {
	const [state, setState] = React.useState<State>({
		animationName: "",
		transitionName: "",
		audio: {
			current: null,
			"breath-in": new Audio(breathInAudio),
			"breath-out": new Audio(breathOutAudio),
		},
	});

	const transitionOut = React.useCallback(
		() =>
			setTimeout(
				() =>
					setState((prev) => ({
						...prev,
						transitionName: "transition-out",
					})),
				2500
			),
		[]
	);

	React.useEffect(() => {
		const ANIM_NAMES: AnimationName[] = ["breath-in", "breath-out"];
		transitionOut();
		const interval = setInterval(
			() =>
				setState((prev) => {
					// find last/current animation
					let index = ANIM_NAMES.findIndex(
						(name) => name === prev.animationName
					);

					// set index of next animation
					if (index < ANIM_NAMES.length - 1) {
						index++;
					} else {
						index = 0;
					}

					// start the function for the text to disappear
					transitionOut();

					// stops previous audio and reset time
					if (prev.audio.current !== null) {
						prev.audio.current.pause();
						prev.audio.current.currentTime = 0;
					}

					// play new audio
					let currentAudio: HTMLAudioElement | null = null;

					currentAudio = prev.audio[ANIM_NAMES[index]];

					currentAudio.play();

					return {
						...prev,
						animationName: ANIM_NAMES[index],
						transitionName: "transition-in",
						audio: {
							...prev.audio,
							current: currentAudio,
						},
					};
				}),
			4500
		);

		return () => {
			state.audio.current?.pause();
			clearInterval(interval);
		};
	}, [transitionOut, state.audio]);

	const getMessage = React.useCallback((animationName: AnimationName) => {
		switch (animationName) {
			case "breath-in":
				return "Povero";
			case "breath-out":
				return "Gabbiano";
		}
	}, []);

	return (
		<>
			<div className="simple_breathing__container">
				<div
					className={`simple_breathing__looper simple_breathing__looper--${state.animationName}`}
				></div>
			</div>
			<div
				className={`simple_breathing__message simple_breathing__message--${state.transitionName}`}
			>
				{state.animationName !== "" && getMessage(state.animationName)}
			</div>
			{state.animationName === "" ? (
				<div className="breathing_message">
					{state.transitionName !== "transition-out" &&
					state.transitionName === ""
						? "Sit in a confortable position."
						: "Let's Start"}
				</div>
			) : (
				<>
					<Timer play={true} />
					<StopButton onClick={onStop} />
				</>
			)}
		</>
	);
};

export default Simple;
