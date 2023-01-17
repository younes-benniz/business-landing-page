import React from "react";
import { Accordion } from ".";

export default {
	title: "Atoms/Accordion",
	component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const accordion = Template.bind({});
