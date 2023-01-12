import React from "react";
import { FaqSection } from ".";

export default {
	title: "section",
	component: FaqSection,
};

const Template = (args) => <FaqSection {...args} />;

export const FAQ = Template.bind({});
