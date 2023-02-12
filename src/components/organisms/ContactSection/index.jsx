import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { SvgIcon } from "../../atoms/SvgIcon";
import { Button } from "../../atoms/Button";
import { ContactDetail } from "../../molecules/ContactDetail";
import { SectionTitle } from "../../atoms/SectionTitle";

export const ContactSection = ({ ...props }) => {
	const details = [
		{ title: "map", description: "ADRESS" },
		{ title: "email", description: "contact@techsio.com" },
		{ title: "phone", description: "+16546846468" },
	];
	return (
		<>
			<SectionTitle
				title="Get in touch"
				description="Connect with Our Team and Discover How We Can Help You Revolutionize Your Workflow."
			/>

			<div className="contact-wrapper">
				<div className="details">
					{details.map((detail) => (
						<ContactDetail
							key={detail.title}
							title={detail.title}
							description={detail.description}
							icon={
								<SvgIcon
									svgSrc={`${detail.title}.svg`}
									size="small"
									isLink={false}
									hasText={false}
								/>
							}
						/>
					))}
					<div
						className="mapouter"
						style={{
							position: "relative",
							textAlign: "right",
							height: 250,
							maxWidth: 450,
							width: "100%",
						}}
					>
						<div className="gmap_canvas">
							<iframe
								id="gmap_canvas"
								title="map"
								src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no"
								style={{
									overflow: "hidden",
									background: "none",
									height: 250,
									width: 450,
								}}
							></iframe>
						</div>
					</div>
				</div>
				<div className="contact-form">
					<div className="name-email-wrapper">
						<div className="name">
							<label htmlFor="name">Name</label>
							<input className="contact-input" type="text" id="name" />
						</div>
						<div className="email">
							<label htmlFor="email">Email</label>
							<input className="contact-input" type="email" id="email" />
						</div>
					</div>
					<div className="subject">
						<label htmlFor="subject">Subject</label>
						<input className="contact-input" type="text" id="subject" />
					</div>
					<div className="message">
						<label htmlFor="message">Message</label>
						<textarea className="contact-input" rows={8} id="message"></textarea>
					</div>
					<div className="button">
						<Button
							mode={"primary"}
							size="large"
							label={"Send"}
							style={{ width: 150 }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
