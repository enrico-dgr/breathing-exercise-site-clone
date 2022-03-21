import React from "react";

// components
import Button from "../../../components/button/Button";
import { BreathingType } from "../types";

// style
import "./style.css";

type Props = {
	onClick?: (breathingType: BreathingType) => void;
};

const ChooseBreathing = ({ onClick }: Props) => {
	const onClickHandler = React.useCallback(
		(breathingType: BreathingType) => () => {
			if (!!onClick) onClick(breathingType);
		},
		[onClick]
	);

	return (
		<div className="choose_breathing">
			<h1>Choose a breathing style</h1>
			<div>
				<Button onClick={onClickHandler("box")}>BOX BREATHING.</Button>
				<Button onClick={onClickHandler("simple")}>SIMPLE BREATHING.</Button>
			</div>
		</div>
	);
};

export default ChooseBreathing;
