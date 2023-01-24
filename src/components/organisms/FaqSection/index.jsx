import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Accordion } from "../../molecules/Accordion";

export const FaqSection = ({ ...props }) => {
	return (
		<>
			<h1 className="faq-section-title">Frequently Asked questions</h1>
			<p className="faq-section-description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, veniam!
			</p>
			<div className="questions-wrapper">
				<Accordion />
				<Accordion />
			</div>
		</>
	);
};
