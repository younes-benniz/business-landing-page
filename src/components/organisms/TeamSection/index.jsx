import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const TeamSection = ({ ...props }) => {
	const arr = [1, 2, 3, 4];
	return (
		<>
			<div className="team-section-title">
				<h2 className="title">Meet our expert Team</h2>
			</div>
			<div className="team-section-description">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusamus!</p>
			</div>

			<div className="team-members">
				{arr.map((num) => (
					<div className="member" key={num}>
						<img
							className="member-img"
							src={process.env.PUBLIC_URL + "/team-member.jpg"}
							alt="team-member"
						/>
						<h3 className="member-name">John Doe</h3>
						<p className="member-role">Front-end dev</p>
						<div className="social-links">
							<SvgIcon
								hasText={false}
								isLink={true}
								svgSrc={process.env.PUBLIC_URL + "/email.svg"}
								size="x-small"
							/>
							<SvgIcon
								hasText={false}
								isLink={true}
								svgSrc={process.env.PUBLIC_URL + "/linkedin.svg"}
								size="x-small"
							/>
							<SvgIcon
								hasText={false}
								isLink={true}
								svgSrc={process.env.PUBLIC_URL + "/twitter.svg"}
								size="x-small"
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
