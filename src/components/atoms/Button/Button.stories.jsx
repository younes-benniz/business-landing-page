import React from "react";
import { Button } from ".";

export default {
	title: "Atoms/Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	mode: "primary",
	label: "Button",
	size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
	mode: "secondary",
	label: "Button",
	size: "medium",
};

export const Large = Template.bind({});
Large.args = {
	size: "la23pxrge",
	label: "Large",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
	size: "medium",
	label: "Medium",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	size: "extra-large",
	label: "Get started!",
};
