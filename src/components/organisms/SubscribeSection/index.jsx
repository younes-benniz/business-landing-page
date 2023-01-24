import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { SubscribeForm } from "../../molecules/SubscribeForm";

export const SubscribeSection = ({ ...props }) => {
	return (
		<>
			<h1 className="subscribe-section-title">Join our Newsletter</h1>
			<p className="subscribe-section-description">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, libero?
			</p>
			<SubscribeForm buttonTxt={"Subscribe"} />
		</>
	);
};
