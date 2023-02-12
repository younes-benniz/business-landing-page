import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../../atoms/SvgIcon";
import { Button } from "../../atoms/Button";
import "./style.scss";

export const PriceCard = ({ title, price, features, isPopular }) => {
	return (
		<div className="price-card">
			<div className="card-header">
				<div className="card-title">
					<h2>{title}</h2>
				</div>
				<div className="card-price">
					<h2>
						<small>$</small>
						{price}
						<span> /Month</span>
					</h2>
				</div>
			</div>
			{isPopular && (
				<div className="ribbon">
					<span className="ribbon-content">Popular</span>
				</div>
			)}
			<div className="card-body">
				<ul className="features-list">
					{features.map((feature) => (
						<li className="feature-item" key={feature}>
							<SvgIcon
								svgSrc={"checked.svg"}
								size={"x-small"}
								isLink={false}
								hasText={false}
							/>
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="card-footer">
				<div className="card-action">
					<Button size="large" label="Buy Now!" />
				</div>
			</div>
		</div>
	);
};
PriceCard.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	featurea: PropTypes.arrayOf(PropTypes.string),
	isPopular: PropTypes.bool,
};

PriceCard.defaultProps = {
	title: "basic",
	isPopular: true,
	id: 1,
	price: 15,
	features: ["Unlimited requests", "Cancel anytime"],
};
