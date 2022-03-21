import { CSSProperties } from "react";

export const getColorCircleStyle = (color: string): CSSProperties => ({
	backgroundColor: color,
	borderRadius: 20,
	cursor: "pointer",
	height: 20,
	width: 20,
});

export const containerStyle: CSSProperties = {
	alignItems: "center",
	backgroundColor: "white",
	borderRadius: "5px 5px 0 0",
	boxShadow: "0 0 15px #999",
	columnGap: 10,
	display: "flex",
	height: 45,
	justifyContent: "center",
	width: 200,
};
