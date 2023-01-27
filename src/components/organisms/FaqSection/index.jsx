import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "../../atoms/SectionTitle";
import "./style.scss";
import { Accordion } from "../../molecules/Accordion";

export const FaqSection = ({ items, ...props }) => {
	return (
		<>
			<SectionTitle
				title="Frequently Asked questions"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, veniam!"
			/>
			<div className="questions-wrapper">
				{items.map((item) => (
					<Accordion question={item.question} answer={item.answer} key={item.question} />
				))}
			</div>
		</>
	);
};

FaqSection.defaultProps = {
	items: [
		{
			question: "Lorem ipsum dolor sit.?",
			answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In.",
		},
		{
			question:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus voluptatem molestias!",
			answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit doloremque exercitationem nesciunt magni tempore.",
		},
	],
};

FaqSection.propTypes = {
	item: PropTypes.arrayOf(PropTypes.object),
};
