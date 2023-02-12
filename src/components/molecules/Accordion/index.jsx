import React, { useState } from "react";
import { SvgIcon } from "../../atoms/SvgIcon";
import PropTypes from "prop-types";
import "./style.scss";

export const Accordion = ({ question, answer, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`accordion-card ${isOpen ? "active" : ""}`}>
			<div className="question-wrapper">
				<SvgIcon
					svgSrc={"question.svg"}
					size="small"
					hasText={false}
					isLink={false}
					style={{ alignSelf: "start" }}
				/>
				<p className="question">{question}</p>
				<SvgIcon
					svgSrc={`arrow-${isOpen ? "up" : "down"}.svg`}
					size="small"
					hasText={false}
					isLink={false}
					style={{ alignSelf: "start" }}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>

			{isOpen && (
				<div className="answer-wrapper">
					<p className="answer">{answer}</p>
				</div>
			)}
		</div>
	);
};

Accordion.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
};

Accordion.defaultProps = {
	question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.?",
	answer: "veritatis in dolores incidunt consequuntur? Lorem ipsum dolor sit ametconsectetur adipisicing elit. In ab minima ratione, magnam perspiciatis ullam!",
};
