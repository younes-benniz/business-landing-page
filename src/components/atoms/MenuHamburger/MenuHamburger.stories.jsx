import React from "react";
import { MenuHamburger } from ".";

export default {
	title: "Atoms/Hamburger",
	component: MenuHamburger,
};

const Template = (args) => <MenuHamburger {...args} />;

export const Hamburger = Template.bind({});

Hamburger.args = {
	style: { background: "transparent" },
};
