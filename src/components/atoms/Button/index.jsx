import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary ? "primary" : "secondary";
	return (
		<button type="button" className={["btn", `btn-${mode}`, size].join(" ")} {...props}>
			{label}
		</button>
	);
};

Button.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	label: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	primary: true,
	label: "Click me!",
};
