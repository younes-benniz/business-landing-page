import React from "react";
import ProprTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const TeamCard = ({ name, imgUrl, role, description, socialMedia }) => {
	return (
		<div className="member">
			<img className="member-img" src={imgUrl} alt="team-member" />
			<h3 className="member-name">{name}</h3>
			<h5 className="member-role">{role}</h5>
			<p className="member-description">{description}</p>
			<div className="social-links">
				{socialMedia.map((social) => (
					<SvgIcon
						key={social.name}
						hasText={false}
						isLink={true}
						link={social.url}
						svgSrc={process.env.PUBLIC_URL + `/${social.name}.svg`}
						size="x-small"
					/>
				))}
			</div>
		</div>
	);
};

TeamCard.proprTypes = {
	name: ProprTypes.string,
	imgUrl: ProprTypes.string,
	role: ProprTypes.string,
	description: ProprTypes.string,
	socialMedia: ProprTypes.arrayOf(ProprTypes.object),
};

TeamCard.defaultProps = {
	name: "Jhon Doe",
	imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
	role: "CEO",
	description: "Former co-founder of Comany x. Early staff at Spotify and Clearbit",
	socialMedia: [
		{ name: "twitter", url: "#" },
		{ name: "linkedin", url: "#" },
		{ name: "email", url: "#" },
	],
};
