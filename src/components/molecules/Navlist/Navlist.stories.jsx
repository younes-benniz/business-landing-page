import React from "react";
import { Navlist } from ".";

export default {
	title: "Molecules/Navlist",
	component: Navlist,
};

const Template = (args) => <Navlist {...args} />;

export const navlist = Template.bind({});

navlist.args = {
	items: ["Home", "contact", "features", "about", "projects"],
	style: { left: "-100%" },
};
