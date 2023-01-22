import React from "react";
import "./style.scss";

export const FooterNav = ({ title, items, ...props }) => {
	return (
		<div className="footer-nav">
			<h3 className="nav-title">{title}</h3>
			<ul className="nav-list">
				{items.map((item) => (
					<li className="nav-item" key={item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

FooterNav.defaultProps = {
	title: "quick links",
	items: ["item1", "item2", "item3", "item4"],
};
