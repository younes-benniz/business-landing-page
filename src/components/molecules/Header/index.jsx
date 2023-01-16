import React, { useState } from "react";
import PropTypes from "prop-types";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { Navlist } from "../Navlist";
import { MenuHamburger } from "../../atoms/MenuHamburger";
import { useMediaQuery } from "react-responsive";
import Breakpoints from "../../Breakpoints";
import "./style.scss";

export const Header = ({ logo, navlist, button, ...props }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const [navOpened, setNavOpened] = useState(false);

	return (
		<header className="header">
			<div className={`header-container ${isMobile ? "mobile" : ""}`}>
				<div className="logo-wrapper">
					<Logo size={isMobile ? "small" : "large"} />
				</div>

				<div className="menu">
					<Navlist style={navOpened ? { left: 0 } : { left: "-100%" }} />
				</div>

				<div className="actions">
					<Button mode={"secondary"} size={isMobile ? "small" : "large"} />
				</div>
				<Breakpoints.Mobile>
					<MenuHamburger onClick={() => setNavOpened(!navOpened)} />
				</Breakpoints.Mobile>
			</div>
		</header>
	);
};

Header.propTypes = {
	logo: PropTypes.element,
	navlist: PropTypes.element,
	button: PropTypes.element,
};
