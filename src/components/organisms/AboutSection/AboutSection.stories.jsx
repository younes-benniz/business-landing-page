import React from "react";
import { AboutSection } from ".";

export default {
	title: "Organisms/section",
	component: AboutSection,
};

const Template = (args) => <AboutSection {...args} />;

export const About = Template.bind();
