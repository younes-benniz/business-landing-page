import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const SvgIcon = ({ svgSrc, size, hasText, isLink, text, link, ...props }) => {
	const imgElem = (
		<>
			<img className={`icon icon-${size}`} src={svgSrc} alt="icon" {...props} />
			{hasText && <span className={`icon-text icon-text-${size}`}>{text}</span>}
		</>
	);
	return (
		<div className="icon-wrapper">
			{isLink ? (
				<a href={link} className="icon-link">
					{imgElem}
				</a>
			) : (
				imgElem
			)}
		</div>
	);
};

SvgIcon.propTypes = {
	hasText: PropTypes.bool,
	isLink: PropTypes.bool,
	svgSrc: PropTypes.string,
	link: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	text: PropTypes.string,
	onClick: PropTypes.func,
};

SvgIcon.defaultProps = {
	hasText: true,
	isLink: true,
	link: "/#",
	svgSrc: process.env.PUBLIC_URL + "/video-stream.svg",
	size: "large",
	text: "Watch video!",
};
