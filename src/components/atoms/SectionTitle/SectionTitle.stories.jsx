import React from "react";
import { SectionTitle } from ".";

export default {
	title: "Atoms/SectionTitle",
	component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

export const sectionTitle = Template.bind({});
