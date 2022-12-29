import React from "react";
import { SvgIcon } from ".";

export default {
	title: "Atoms/SvgIcon",
	component: SvgIcon,
};

const Template = (args) => <SvgIcon {...args} />;

export const SmallIcon = Template.bind({});

SmallIcon.args = {
	hasText: true,
	isLink: false,
	link: "/#",
	svgSrc: process.env.PUBLIC_URL + "/video-stream.svg",
	size: "small",
	text: "Watch video!",
};

export const MediumIcon = Template.bind({});

MediumIcon.args = {
	hasText: true,
	isLink: true,
	link: "/#",
	svgSrc: process.env.PUBLIC_URL + "/video-stream.svg",
	size: "medium",
	text: "Watch video!",
};

export const LargeIcon = Template.bind({});

LargeIcon.args = {
	hasText: true,
	isLink: true,
	link: "/#",
	svgSrc: process.env.PUBLIC_URL + "/video-stream.svg",
	size: "large",
	text: "Watch video!",
};
