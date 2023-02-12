import React from "react";
import { FooterNav } from "../../molecules/FooterNav";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const Footer = ({ ...props }) => {
	const socialMedia = ["twitter", "instagram", "linkedin", "facebook", "whatsapp"];
	return (
		<>
			<div className="columns">
				<div className="social-column">
					<h3 className="social-title">our Social networks</h3>
					<p className="social-description">
						Follow Us on Social Media to Stay Informed, Engage with Our Community, and
						Stay Ahead of the Latest Trends.
					</p>
					<div className="social-icons">
						{socialMedia.map((social) => (
							<SvgIcon
								svgSrc={`${social}.svg`}
								hasText={false}
								isLink={false}
								size="x-small"
								key={social}
							/>
						))}
					</div>
				</div>
				<div className="useful-links">
					<FooterNav title="Useful Links" />
				</div>
				<div className="our-services">
					<FooterNav title="Our Services" />
				</div>
			</div>
			<div className="copyright">
				<p>© 2023 Copyright</p>
				<p>made by: Younes</p>
			</div>
		</>
	);
};
