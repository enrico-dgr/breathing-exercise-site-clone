import React from "react";

import ColorPicker from "../../components/colorPicker/ColorPicker";
import ChooseBreathing from "./chooseBreathing/ChooseBreathing";
import Play from "./play/Play";

// style
import "./style.css";
import { BreathingType } from "./types";

type State = {
	backgroundColor: string;
	breathingType: "" | BreathingType;
};

const Home = () => {
	const [state, setState] = React.useState<State>({
		backgroundColor: "",
		breathingType: "",
	});

	const onChangeColor = React.useCallback(
		(color: string) =>
			setState((prev) => ({ ...prev, backgroundColor: color })),
		[]
	);

	const onChangeBreathingType = React.useCallback(
		(breathingType: BreathingType) =>
			setState((prev) => ({ ...prev, breathingType })),
		[]
	);

	const onStop = React.useCallback(
		() => setState((prev) => ({ ...prev, breathingType: "" })),
		[]
	);

	return (
		<div className={"home"} style={{ backgroundColor: state.backgroundColor }}>
			<div className={"home__content"}>
				{state.breathingType === "" && (
					<ChooseBreathing onClick={onChangeBreathingType} />
				)}
				{state.breathingType !== "" && (
					<Play breathingType={state.breathingType} onStop={onStop} />
				)}
				<ColorPicker
					onChange={onChangeColor}
					style={{
						bottom: 0,
						left: "50%",
						right: "50%",
						position: "absolute",
						transform: "translateX(-100px)",
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
