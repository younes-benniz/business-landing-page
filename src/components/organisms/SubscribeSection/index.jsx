import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button } from "../../atoms/Button";

export const SubscribeSection = ({ ...props }) => {
	return (
		<section className="subscribe-section">
			<h1 className="subscribe-section-title">Join our Newsletter</h1>
			<p className="subscribe-section-description">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, libero?
			</p>
			<div className="subscribe-form">
				<input className="subscribe-form-email" type="email" />
				<Button mode="primary" size="large" label="Subscribe" />
			</div>
		</section>
	);
};
