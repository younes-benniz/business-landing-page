import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/Button";
import "./style.scss";

export const AboutSection = ({ ...props }) => {
	return (
		<section className="about-section">
			<div className="img-wrapper">
				<img
					className="company-img"
					src={process.env.PUBLIC_URL + "/business.svg"}
					alt="company"
				/>
			</div>
			<div className="content-wrapper">
				<div className="about-section-title">
					<h3>About us</h3>
				</div>
				<div className="about-title">
					<h2>Top Marketing Agency & Consult Your Website With Us</h2>
				</div>
				<div className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus
					temporibus suscipit ex modi placeat repudiandae tenetur in illum assumenda!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor rerum
					maxime sunt soluta illum doloribus, repellendus aperiam? Quos, obcaecati amet.
					Eum odit illum adipisci rerum accusantium modi voluptatem sapiente.
				</div>
				<Button />
			</div>
		</section>
	);
};
