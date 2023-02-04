import React from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import { PriceCard } from "../../molecules/PriceCard";
import "./style.scss";

export const PricingSection = ({ ...props }) => {
	return (
		<>
			<SectionTitle
				title="Choose the plan that fits for your team"
				description="Deploy your sites to global infrastructure in seconds. No credit card required"
			/>
			<div className="pricing-cards">
				<PriceCard isPopular={false} />
				<PriceCard isPopular={true} />
				<PriceCard isPopular={false} />
			</div>
		</>
	);
};
