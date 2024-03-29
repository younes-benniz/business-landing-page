import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const SvgIcon = ({ svgSrc, size, hasText, isLink, text, link, style, ...props }) => {
	const imgElem = (
		<>
			<img
				className={`icon icon-${size}`}
				src={process.env.PUBLIC_URL + "/images/" + svgSrc}
				alt="icon"
				{...props}
			/>
			{hasText && <span className={`icon-text icon-text-${size}`}>{text}</span>}
		</>
	);
	return (
		<div className="icon-wrapper" style={style}>
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
	size: PropTypes.oneOf(["x-small", "small", "medium", "large"]),
	text: PropTypes.string,
	onClick: PropTypes.func,
};

SvgIcon.defaultProps = {
	hasText: true,
	isLink: true,
	link: "/#",
	svgSrc: "video-stream.svg",
	size: "large",
	text: "Watch video!",
};
