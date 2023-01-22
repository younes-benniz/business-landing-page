import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { SvgIcon } from "../../atoms/SvgIcon";
import { Button } from "../../atoms/Button";
import { ContactDetail } from "../../molecules/ContactDetail";

export const ContactSection = ({ ...props }) => {
	return (
		<section className="contact-section">
			<h1 className="contact-section-title">CONTACT</h1>
			<p className="contact-section-description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat facilis
				suscipit, alias quos dicta pariatur neque maxime earum.
			</p>
			<div className="contact-wrapper">
				<div className="details">
					<ContactDetail />
					<ContactDetail />
					<ContactDetail />
					<div
						className="mapouter"
						style={{
							position: "relative",
							textAlign: "right",
							height: 500,
							width: 352,
						}}
					>
						<div className="gmap_canvas">
							<iframe
								id="gmap_canvas"
								title="map"
								src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								style={{
									overflow: "hidden",
									background: "none",
									height: 300,
									width: 400,
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
						<Button mode={"primary"} size="large" label={"Send"} />
					</div>
				</div>
			</div>
		</section>
	);
};
