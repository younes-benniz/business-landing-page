import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import { SectionTitle } from "../../atoms/SectionTitle";
import "./style.scss";

export const TeamSection = ({ team, ...props }) => {
	return (
		<>
			<SectionTitle
				title="Meet our expert Team"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusamus!"
			/>
			<div className="team-members">
				{team.map((member) => (
					<div className="member" key={member.name.replace(" ", "_")}>
						<img className="member-img" src={member.imgUrl} alt="team-member" />
						<h3 className="member-name">{member.name}</h3>
						<p className="member-role">{member.role}</p>
						<div className="social-links">
							{member.soicalMedia.map((social) => (
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
				))}
			</div>
		</>
	);
};

TeamSection.propTypes = {
	team: PropTypes.arrayOf(PropTypes.object),
};

TeamSection.defaultProps = {
	team: [
		{
			name: "John Doe",
			imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
			role: "front-end dev",
			soicalMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "alex hernandes",
			imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
			role: "back-end dev",
			soicalMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "John Doe",
			imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
			role: "front-end dev",
			soicalMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "alex hernandes",
			imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
			role: "back-end dev",
			soicalMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
	],
};
