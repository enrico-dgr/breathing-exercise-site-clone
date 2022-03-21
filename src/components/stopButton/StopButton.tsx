import React from "react";

type Props = {
	onClick?: () => void;
};

const StopButton = ({ onClick }: Props) => {
	return (
		<div className="stop_btn_container" onClick={onClick}>
			<span>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M7 7h10v10H7z"></path>
				</svg>
			</span>
		</div>
	);
};

export default StopButton;
