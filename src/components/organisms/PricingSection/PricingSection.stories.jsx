import React from "react";
import { PricingSection } from ".";

export default {
	title: "section",
	component: PricingSection,
};

const Template = (args) => <PricingSection {...args} />;

export const pricing = Template.bind({});
