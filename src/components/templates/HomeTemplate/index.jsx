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
			{header && <header className="header">{header}</header>}
			{hero && <section className="section hero-section">{hero}</section>}
			{about && <section className="section about-section">{about}</section>}
			{features && <section className="section features-section">{features}</section>}
			{pricing && <section className="section pricing-section">{pricing}</section>}
			{technology && <section className="section technology-section">{technology}</section>}
			{team && <section className="section team-section">{team}</section>}
			{testimonial && (
				<section className="section testimonial-section">{testimonial}</section>
			)}
			{faq && <section className="section faq-section">{faq}</section>}
			{contact && <section className="section contact-section">{contact}</section>}
			{subscribe && <section className="section subscribe-section">{subscribe}</section>}
			{footer && <footer className="footer">{footer}</footer>}
		</>
	);
};
