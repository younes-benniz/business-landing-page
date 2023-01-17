import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/Button";
import { SvgIcon } from "../../atoms/SvgIcon";
import { useMediaQuery } from "react-responsive";
import "./style.scss";

export const HeroSection = ({ heroImg, title, description, ...props }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<section className="hero-section">
			<div className="hero-wrapper">
				<div className="content">
					<h1 className="hero-title">{title}</h1>
					<p className="hero-description">{description}</p>
					<div className="hero-actions">
						<Button mode="secondary" size="extra-large" />

						<SvgIcon size={isMobile ? "small" : "medium"} />
					</div>
				</div>
				<div className="image">
					<div className="hero-image-wrapper">
						<img src={heroImg} className="hero-image" alt="vido-icon" />
					</div>
				</div>
			</div>
		</section>
	);
};

HeroSection.propTypes = {
	heroImg: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

HeroSection.defaultProps = {
	heroImg: process.env.PUBLIC_URL + "./building_websites.svg",
	title: "Better solutions for Your Business",
	description: "we are a team specialised in digital marketing.",
};
