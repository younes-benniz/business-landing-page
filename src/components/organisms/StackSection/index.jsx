import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const StackSection = ({ size, stacks, ...props }) => {
	return (
		<section className="tech-stack">
			<div className="stack-wrapper">
				<div className="stack stack-1">
					{stacks.map((stack) => (
						<img
							src={stack.src}
							className={`stack-img stack-img-${size}`}
							alt={stack.name}
							key={stack.name}
						/>
					))}
				</div>
				<div className="stack stack-2">
					{stacks.map((stack) => (
						<img
							src={stack.src}
							className={`stack-img stack-img-${size}`}
							alt={stack.name}
							key={stack.name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

StackSection.propTypes = {
	stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

StackSection.defaultProps = {
	stacks: [
		{ name: "react", src: "/tech-stack/react.svg" },
		{ name: "sass", src: "/tech-stack/sass.svg" },
		{ name: "js", src: "/tech-stack/javascript.svg" },
		{ name: "html", src: "/tech-stack/html.svg" },
		{ name: "storybook", src: "/tech-stack/storybook.svg" },
	],
	size: "small",
};
