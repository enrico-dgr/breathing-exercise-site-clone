import React from "react";

// styles
import "./style.css";

type Props = {
	play: boolean;
};

type State = {
	initTimestamp: number;
	deltaTimestamp: number;
};

const Timer = ({ play }: Props) => {
	const [state, setState] = React.useState<State>({
		initTimestamp: Date.now(),
		deltaTimestamp: 0,
	});

	React.useEffect(() => {
		const interval = setInterval(
			() =>
				setState((prev) => ({
					...prev,
					deltaTimestamp: Date.now() - prev.initTimestamp,
				})),
			1000
		);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const getTime = React.useCallback((delta: number) => {
		const date = new Date(delta);
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		return `${minutes < 10 ? "0" : ""}${minutes}:${
			seconds < 10 ? "0" : ""
		}${seconds}`;
	}, []);

	return <div className="timer">{getTime(state.deltaTimestamp)}</div>;
};

export default Timer;
