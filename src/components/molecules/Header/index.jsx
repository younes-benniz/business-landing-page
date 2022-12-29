import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { Navlist } from "../Navlist";
import "./style.scss";

export const Header = ({ logo, navlist, button, ...props }) => {
	return (
		<header className="header">
			<div className="header-container">
				<div className="logo-wrapper">
					<Logo />
				</div>
				<div className="menu">
					<Navlist />
				</div>
				<div className="actions">
					<Button mode={"secondary"} />
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	logo: PropTypes.element.isRequired,
	navlist: PropTypes.element.isRequired,
	button: PropTypes.element,
};
