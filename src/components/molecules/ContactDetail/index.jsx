import React from "react";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const ContactDetail = ({ icon, title, description, ...props }) => {
	return (
		<div className="contact-detail">
			<div className="detail-icon">{icon}</div>
			<div className="detail">
				<h4 className="detail-title">{title}</h4>
				<p className="detail-description">{description}</p>
			</div>
		</div>
	);
};

ContactDetail.defaultProps = {
	icon: (
		<SvgIcon
			svgSrc={process.env.PUBLIC_URL + "/map.svg"}
			size="small"
			isLink={false}
			hasText={false}
		/>
	),
	title: "Location:",
	description: "Lorem ipsum dolor sit amet.",
};
