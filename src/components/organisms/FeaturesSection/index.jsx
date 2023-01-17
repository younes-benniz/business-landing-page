import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const FeaturesSection = ({ features, ...props }) => {
	return (
		<section className="features">
			<div className="features-wrapper">
				{features.map((feature) => (
					<div className="feature-item" key={feature.number}>
						<div
							className="feature-number"
							style={{
								backgroundImage: `url(${process.env.PUBLIC_URL} /features-number-${feature.number}.png)`,
							}}
						>
							<h6>{feature.number}</h6>
						</div>
						<div className="feature-icon">
							<img src={feature.icon} alt="feture-icon" />
						</div>
						<h4 className="feature-titile">{feature.title}</h4>
						<div className="line"></div>
						<p className="feature-description">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

FeaturesSection.propTypes = {
	features: PropTypes.arrayOf(PropTypes.object),
};

FeaturesSection.defaultProps = {
	features: [
		{
			number: 1,
			title: "Reach Out",
			icon: process.env.PUBLIC_URL + "/features-icon-01.png",
			description:
				"This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything.",
		},
		{
			number: 2,
			title: "Develop a Strategy",
			icon: process.env.PUBLIC_URL + "/features-icon-02.png",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum quisquam repellat doloribus dicta at.",
		},
		{
			number: 3,
			title: "Implementation",
			icon: process.env.PUBLIC_URL + "/features-icon-01.png",
			description:
				"If this template is useful for your website, please consider to support us a little",
		},
		{
			number: 4,
			title: "Analyze the result",
			icon: process.env.PUBLIC_URL + "/features-icon-02.png",
			description:
				"Below circular progress bar animation supports those CSS values 10, 20, 30, till 100.",
		},
	],
};
