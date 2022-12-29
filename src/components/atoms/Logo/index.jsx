import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const Logo = ({ brand, size, link, imgSrc, hasImg, hasTxt, ...props }) => {
	return (
		<a href={link} className={`logo logo-${size}`} {...props}>
			{hasImg && <img className="logo-img" src={imgSrc} alt={brand + "-logo"} />}
			{hasTxt && <h1 className="brand-name">{brand}</h1>}
		</a>
	);
};

Logo.propTypes = {
	brand: PropTypes.string,
	size: PropTypes.oneOf(["medium", "large"]),
	link: PropTypes.string,
	imgSrc: PropTypes.string,
	hasImg: PropTypes.bool,
	hasTxt: PropTypes.bool,
	onClick: PropTypes.func,
};

Logo.defaultProps = {
	brand: "TechSio",
	size: "large",
	imgSrc: process.env.PUBLIC_URL + "/robot.svg",
	link: "#",
	hasImg: true,
	hasTxt: true,
};
