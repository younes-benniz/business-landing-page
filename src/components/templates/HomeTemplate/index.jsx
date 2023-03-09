import React from "react";
import "./style.scss";

export const HomeTemplate = ({
	header,
	hero,
	about,
	features,
	pricing,
	technology,
	team,
	testimonial,
	faq,
	contact,
	subscribe,
	footer,
}) => {
	return (
		<>
			{header && (
				<header id="header" className="header">
					{header}
				</header>
			)}
			{hero && (
				<section id="hero" className="section hero-section">
					{hero}
				</section>
			)}
			{about && (
				<section id="about" className="section about-section">
					{about}
				</section>
			)}
			{features && (
				<section id="features" className="section features-section">
					{features}
				</section>
			)}
			{pricing && (
				<section id="pricing" className="section pricing-section">
					{pricing}
				</section>
			)}
			{technology && (
				<section id="technology" className="section technology-section">
					{technology}
				</section>
			)}
			{team && (
				<section id="team" className="section team-section">
					{team}
				</section>
			)}
			{testimonial && (
				<section id="testimonial" className="section testimonial-section">
					{testimonial}
				</section>
			)}
			{faq && (
				<section id="faq" className="section faq-section">
					{faq}
				</section>
			)}
			{contact && (
				<section id="contact" className="section contact-section">
					{contact}
				</section>
			)}
			{subscribe && (
				<section id="subscribe" className="section subscribe-section">
					{subscribe}
				</section>
			)}
			{footer && (
				<footer id="footer" className="footer">
					{footer}
				</footer>
			)}
		</>
	);
};
