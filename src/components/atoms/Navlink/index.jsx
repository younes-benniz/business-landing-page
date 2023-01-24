import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Navlink = ({ label, link, mode, ...props }) => {
	return (
		<span className={`nav-link ${mode}`} {...props}>
			{label}
		</span>
	);
};

Navlink.propTypes = {
	label: PropTypes.string,
	mode: PropTypes.oneOf(["dark", "light"]),
	link: PropTypes.string,
	onClick: PropTypes.func,
};

Navlink.defaultProps = {
	mode: "dark",
	label: "Home",
	link: "/#",
};
