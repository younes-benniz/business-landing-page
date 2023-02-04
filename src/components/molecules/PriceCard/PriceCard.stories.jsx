import React from "react";
import { PriceCard } from ".";

export default {
	title: "Molecules/PriceCard",
	component: PriceCard,
};

const Template = (args) => <PriceCard {...args} />;

export const priceCard = Template.bind({});
