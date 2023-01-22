import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/Button";
import "./style.scss";

export const SubscribeForm = ({ buttonTxt, ...props }) => {
	return (
		<div className="subscribe-form">
			<input className="subscribe-form-email" type="email" />
			<Button mode="secondary" size="large" label={buttonTxt} style={{ height: 44 }} />
		</div>
	);
};

SubscribeForm.defaultProps = {
	buttonTxt: "Subscribe!",
};
