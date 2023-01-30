import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import { SectionTitle } from "../../atoms/SectionTitle";
import { TeamCard } from "../../molecules/TeamCard";
import "./style.scss";

export const TeamSection = ({ team, ...props }) => {
	return (
		<>
			<SectionTitle
				title="Meet our expert Team"
				description="We are team of creatively diverse. driven. innovative individuals working in various locations from the world."
			/>
			<div className="team-members">
				{team.map((member) => (
					<TeamCard
						name={member.name}
						imgUrl={member.imgUrl}
						role={member.role}
						description={member.description}
						socialMedia={member.socialMedia}
					/>
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
			name: "Bill Mahoney",
			imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			role: "Founder & CEO",
			description: "Former co-founder of Comany x. Early staff at Spotify and Clearbit.",
			socialMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "Skylah Lu",
			imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
			role: "Engineering Manager",
			description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
			socialMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "John Doee",
			imgUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			role: "front-end dev",
			description: "Lorem ipsum dolor sit amet consectetur.dolor sit ",
			socialMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
		{
			name: "alex hernandess",
			imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
			role: "back-end dev",
			description: "Lorem ipsum dolor sit amet consectetur.dolor sit ",
			socialMedia: [
				{ name: "twitter", url: "#" },
				{ name: "linkedin", url: "#" },
				{ name: "email", url: "#" },
			],
		},
	],
};
