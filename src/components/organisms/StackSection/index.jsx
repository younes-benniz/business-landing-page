import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "../../atoms/SectionTitle";
import "./style.scss";

export const StackSection = ({ stacks, ...props }) => {
	return (
		<>
			<SectionTitle
				title="technology Stack"
				description="discover our technology stack that we use"
				style={{ marginBottom: 0 }}
			/>
			<div className="stack-wrapper">
				<div className="stack stack-1">
					{stacks.map((stack) => (
						<img
							src={process.env.PUBLIC_URL + "/images/" + stack.src}
							className="stack-img"
							alt={stack.name}
							key={stack.name}
						/>
					))}
				</div>
				<div className="stack stack-2">
					{stacks.map((stack) => (
						<img
							src={process.env.PUBLIC_URL + "/images/" + stack.src}
							className="stack-img"
							alt={stack.name}
							key={stack.name}
						/>
					))}
				</div>
			</div>
		</>
	);
};

StackSection.propTypes = {
	stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

StackSection.defaultProps = {
	stacks: [
		{ name: "react", src: "tech-stack/react.svg" },
		{ name: "sass", src: "tech-stack/sass.svg" },
		{ name: "js", src: "tech-stack/javascript.svg" },
		{ name: "html", src: "tech-stack/html.svg" },
		{ name: "storybook", src: "tech-stack/storybook.svg" },
	],
};
