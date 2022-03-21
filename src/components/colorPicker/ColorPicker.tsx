import React, { CSSProperties, FunctionComponent, useCallback } from "react";
import { containerStyle, getColorCircleStyle } from "./style";

type Props = {
	onChange?: (color: string) => void;
	style?: CSSProperties;
};

const DEFAULT_PROPS = {
	onChange: () => undefined,
	style: {},
};

type State = {
	color: string;
};

const ColorPicker: FunctionComponent<Props> = ({ onChange, style }) => {
	const [state, setState] = React.useState<State>({
		color: "#FF6363",
	});

	React.useEffect(() => {
		if (!!onChange) onChange(state.color);
	}, [onChange, state.color]);

	const onChangeColor = useCallback(
		(color: string) => () => {
			setState((prev) => {
				// do not update
				if (prev.color === color) {
					return prev;
				}

				// update
				return { ...prev, color };
			});
		},
		[]
	);

	const COLORS = React.useMemo(
		() => ["#FF6363", "#96CEB4", "#D22779", "#DACC96", "#F3C5C5", "#1572A1"],
		[]
	);

	const mapColor = React.useCallback(
		(color: string, i: number) => (
			<div
				key={i + color}
				onClick={onChangeColor(color)}
				style={getColorCircleStyle(color)}
			></div>
		),
		[onChangeColor]
	);

	return (
		<div style={{ ...containerStyle, ...(style ?? DEFAULT_PROPS.style) }}>
			{COLORS.map(mapColor)}
		</div>
	);
};

export default ColorPicker;
