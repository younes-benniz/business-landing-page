import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Button = ({ mode, backgroundColor, size, label, ...props }) => {
	return (
		<button
			type="button"
			className={["button", `${mode}-button`, `button-${size}`].join(" ")}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	mode: PropTypes.oneOf(["primary", "secondary"]),
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large", "extra-large"]),
	label: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	mode: "primary",
	label: "Get Started !",
	size: "large",
};
