import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Navlink = ({ label, link, ...props }) => {
	return (
		<span className="nav-link" {...props}>
			{label}
		</span>
	);
};

Navlink.propTypes = {
	label: PropTypes.string,
	link: PropTypes.string,
	onClick: PropTypes.func,
};

Navlink.defaultProps = {
	label: "Home",
	link: "/#",
};
