import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Navlink = ({ label, link, mode, ...props }) => {
	return (
		<a
			href={`#${label.toLowerCase() === "home" ? "header" : label.toLowerCase()}`}
			className={`nav-link ${mode}`}
			{...props}
		>
			{label}
		</a>
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
