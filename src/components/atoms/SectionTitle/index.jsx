import React from "react";
import "./style.scss";

export const SectionTitle = ({ title, description, style }) => {
	return (
		<div className="section-title-wrapper" style={style}>
			<h1 className="section-title">{title}</h1>
			<p className="section-description">{description}</p>
		</div>
	);
};

SectionTitle.defaultProps = {
	title: "Hello World!",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur dolores unde dignissimos eveniet perferendis a repellat nisi eos tempora.",
};
