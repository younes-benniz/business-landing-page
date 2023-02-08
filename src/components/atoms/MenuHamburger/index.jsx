import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const MenuHamburger = ({ className, style, onClick, color, isChecked, onChange }) => {
	return (
		<div className={`menu-hamburger ${className}`} style={style}>
			<input
				type="checkbox"
				className="hamburger"
				onClick={onClick}
				checked={isChecked}
				onChange={onChange}
			/>
			<span className={`hamburger-line ${color}`}></span>
			<span className={`hamburger-line ${color}`}></span>
			<span className={`hamburger-line ${color}`}></span>
		</div>
	);
};

MenuHamburger.propTypes = {
	onClick: PropTypes.func,
};

MenuHamburger.defaultProps = {
	isChecked: false,
};
