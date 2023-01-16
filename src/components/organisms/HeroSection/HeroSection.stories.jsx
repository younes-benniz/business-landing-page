import React from "react";
import { HeroSection } from ".";

export default {
	title: "Organisms",
	component: HeroSection,
};

const Template = (args) => <HeroSection {...args} />;

export const Hero = Template.bind();

Hero.args = {
	heroImg: process.env.PUBLIC_URL + "./building_websites.svg",
	title: "Better solutions for Your Business",
	description: "we are a team specialised in digital marketing.",
};
