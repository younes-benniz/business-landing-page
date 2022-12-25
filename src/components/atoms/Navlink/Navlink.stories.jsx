import React from "react";
import { Navlink } from ".";

export default {
	title: "Atoms/Navlink",
	component: Navlink,
};

const Template = (args) => <Navlink {...args} />;

export const Link = Template.bind({});

Link.args = {
	label: "Home",
};
