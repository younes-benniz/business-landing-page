import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import "./style.scss";

export const Testimonial = ({ imgUrl, clientName, clientLocation, stars, feedback }) => {
	return (
		<div className="client-testimonial">
			<img className="client-img" src={imgUrl} alt="client" />
			<h3 className="client-name">{clientName}</h3>
			<p className="client-location">{clientLocation}</p>
			<div className="stars">
				{[...Array(stars).keys()].map((star) => (
					<SvgIcon
						key={star}
						svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
						size="x-small"
						hasText={false}
						isLink={false}
					/>
				))}
				{[...Array(5 - stars).keys()].map((star) => (
					<SvgIcon
						key={star}
						svgSrc={process.env.PUBLIC_URL + "/star-empty.svg"}
						size="x-small"
						hasText={false}
						isLink={false}
					/>
				))}
			</div>
			<div className="feedback-quote">
				<SvgIcon
					svgSrc={process.env.PUBLIC_URL + "/quote-left.svg"}
					size="small"
					hasText={false}
					isLink={false}
				/>
				<p className="client-feedback">{feedback}</p>
				<SvgIcon
					svgSrc={process.env.PUBLIC_URL + "/quote-right.svg"}
					size="small"
					hasText={false}
					isLink={false}
				/>
			</div>
		</div>
	);
};

Testimonial.propTypes = {
	imgUrl: PropTypes.string,
	clientName: PropTypes.string,
	clientLocation: PropTypes.string,
	stars: PropTypes.number,
};

Testimonial.defaultProps = {
	imgUrl: process.env.PUBLIC_URL + "/team-member.jpg",
	clientName: "John Doe",
	clientLocation: "Sydney, Australia",
	stars: 4,
	feedback:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente istequod quidem tempore dolores laborum libero rem aspernatur quam obcaecati non velculpa doloremque recusandae, voluptas alias saepe reiciendis.",
};
