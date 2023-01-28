import React from "react";
import { Button } from "../../atoms/Button";
import Breakpoints from "../../Breakpoints";
import "./style.scss";

export const SubscribeForm = ({ buttonTxt, ...props }) => {
	return (
		<div className="subscribe-form">
			<input className="subscribe-form-email" type="email" />
			<Button
				mode="secondary"
				size={Breakpoints.Mobile ? "medium" : "large"}
				label={buttonTxt}
				style={{ height: 48 }}
			/>
		</div>
	);
};

SubscribeForm.defaultProps = {
	buttonTxt: "Subscribe!",
};
