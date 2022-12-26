import React from "react";
import PropTypes from "prop-types";
import { Navlink } from "../../atoms/Navlink";
import "./style.scss";

export const Navlist = ({ items, ...props }) => {
	return (
		<ul className="nav-list">
			{items.map((item) => (
				<li className="nav-item" key={item}>
					<Navlink label={item} link={`#${item}`} />
				</li>
			))}
		</ul>
	);
};

Navlist.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
