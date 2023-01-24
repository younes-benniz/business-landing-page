import React from "react";
import PropTypes from "prop-types";
import { Navlink } from "../../atoms/Navlink";
import { useMediaQuery } from "react-responsive";
import "./style.scss";

export const Navlist = ({ items, style, color, ...props }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return (
		<div className="nav-menu">
			<ul
				className={`nav-list ${isDesktop ? "nav-list-desktop" : "nav-list-mobile"}`}
				style={style}
			>
				{items.map((item) => (
					<li className="nav-item" key={item}>
						<Navlink label={item} link={`#${item}`} mode={color} />
					</li>
				))}
			</ul>
		</div>
	);
};

Navlist.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	style: PropTypes.object,
};

Navlist.defaultProps = {
	items: ["Home", "contact", "features", "about", "projects", "pricing"],
};
