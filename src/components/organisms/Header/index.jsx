import React, { useState } from "react";
import PropTypes from "prop-types";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { Navlist } from "../../molecules/Navlist";
import { MenuHamburger } from "../../atoms/MenuHamburger";
import { useMediaQuery } from "react-responsive";
import Breakpoints from "../../Breakpoints";
import "./style.scss";

export const Header = ({ logo, navlist, button, ...props }) => {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [navOpened, setNavOpened] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [menuToggleColor, setMenuToggleColor] = useState("light");
	const addNavbarBackground = () => {
		setNavOpened(false);
		window.scrollY >= 500 ? setNavbar(true) : setNavbar(false);
		window.scrollY <= 500 ? setMenuToggleColor("light") : setMenuToggleColor("dark");
	};
	window.addEventListener("scroll", addNavbarBackground);

	return (
		<div className={`header-container ${isMobile ? "mobile" : ""} ${navbar ? "sticky" : ""}`}>
			<div className="logo-wrapper">
				<Logo size={isMobile ? "small" : "large"} color={`${navbar ? "dark" : "light"}`} />
			</div>

			<div className="menu">
				<Navlist
					style={navOpened ? { left: 0 } : { left: "-100%" }}
					color={`${navbar ? "dark" : "light"}`}
				/>
			</div>
			<Breakpoints.Desktop>
				<div className="actions">
					<Button mode={"secondary"} size={isMobile ? "small" : "large"} />
				</div>
			</Breakpoints.Desktop>

			<Breakpoints.Mobile>
				<MenuHamburger onClick={() => setNavOpened(!navOpened)} color={menuToggleColor} />
			</Breakpoints.Mobile>
		</div>
	);
};

Header.propTypes = {
	logo: PropTypes.element,
	navlist: PropTypes.element,
	button: PropTypes.element,
};
