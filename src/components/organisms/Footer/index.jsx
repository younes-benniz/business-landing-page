import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Footer = ({ ...props }) => {
	return (
		<footer className="footer">
			<div className="columns">
				<div className="social-column">
					<h3>our Social networks</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</div>
				<div className="quick-links-column">
					<h3>Quick links</h3>
					<ul>
						<li>item 1</li>
						<li>item 2</li>
						<li>item 3</li>
						<li>item 4</li>
					</ul>
				</div>
				<div className="servies-column">
					<h3>Services</h3>
					<ul>
						<li>item 1</li>
						<li>item 2</li>
						<li>item 3</li>
						<li>item 4</li>
					</ul>
				</div>
			</div>
			<div className="copyright">
				<p>© 2023 Copyright</p>
				<p>made by: Younes</p>
			</div>
		</footer>
	);
};
