import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/Button";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const HeroSection = ({ heroImg, title, description, ...props }) => {
	return (
		<section className="hero-section">
			<div class="hero-wrapper">
				<div className="left">
					<h1 class="hero-title">{title}</h1>
					<p className="hero-description">{description}</p>
					<div class="hero-actions">
						<Button mode="secondary" size="extra-large" />

						<SvgIcon size="medium" />
					</div>
				</div>
				<div className="right">
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
