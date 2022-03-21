import React, { CSSProperties } from "react";

// style
import "./style.css";

type Props = {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLSpanElement>;
	style?: CSSProperties;
};

/**
 * `className = 'btn'`
 */
const Button = ({ onClick, children, style }: Props) => {
	return (
		<span className="btn" onClick={onClick} style={style}>
			{children}
		</span>
	);
};

export default Button;
