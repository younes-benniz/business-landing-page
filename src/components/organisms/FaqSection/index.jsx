import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Accordion } from "../../molecules/Accordion";
import "./style.scss";

export const FaqSection = ({ items, ...props }) => {
	return (
		<>
			<SectionTitle
				title="Frequently Asked questions"
				description="A Guide to the Most Commonly Asked Questions About Our Technology and Services."
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
			question: "How easy is it to use our technology?",
			answer: "Our technology has been designed with ease of use in mind. With a user-friendly interface and intuitive navigation, you'll be up and running in no time.",
		},
		{
			question: "Can I automate tasks with your platform?",
			answer: "Yes! Our automation capabilities allow you to streamline your workflow and save time. Automate repetitive tasks and trigger actions based on specific events to increase efficiency.",
		},
		{
			question: "Is your technology customizable?",
			answer: "Absolutely! Our platform is highly customizable, so you can tailor it to your unique requirements. Whether you need to adjust settings or create custom reports, our technology is flexible and adaptable to your needs.",
		},
	],
};

FaqSection.propTypes = {
	item: PropTypes.arrayOf(PropTypes.object),
};
