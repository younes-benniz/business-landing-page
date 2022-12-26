import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Header = ({ logo, navlist, button, ...props }) => {
	return (
		<header className="header">
			<div className="header-container">
				<div className="logo-wrapper">{logo}</div>
				<div className="menu">{navlist}</div>
				<div className="actions">{button}</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	logo: PropTypes.element.isRequired,
	navlist: PropTypes.element.isRequired,
	button: PropTypes.element,
};
