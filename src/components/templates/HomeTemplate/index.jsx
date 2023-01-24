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
			<header className="header">{header}</header>
			<section className="section hero-section">{hero}</section>
			<section className="section about-section">{about}</section>
			<section className="section features-section">{features}</section>
			<section className="section pricing-section">{pricing}</section>
			<section className="section technology-section">{technology}</section>
			<section className="section team-section">{team}</section>
			<section className="section testimonial-section">{testimonial}</section>
			<section className="section faq-section">{faq}</section>
			<section className="section contact-section">{contact}</section>
			<section className="section subscribe-section">{subscribe}</section>
			<footer className="footer">{footer}</footer>
		</>
	);
};
