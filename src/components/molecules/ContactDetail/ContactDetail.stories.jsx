import React from "react";
import { ContactDetail } from ".";

export default {
	title: "Molecules/ContactDetail",
	component: ContactDetail,
};

const Template = (args) => <ContactDetail {...args} />;

export const contactDetail = Template.bind({});
