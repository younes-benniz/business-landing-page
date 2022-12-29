import React from "react";
import { Logo } from ".";

export default {
	title: "Atoms/Logo",
	component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const logo = Template.bind({});

logo.args = {
	brand: "agency",
	hasImg: true,
	imgSrc: process.env.PUBLIC_URL + "/robot.svg",
};
