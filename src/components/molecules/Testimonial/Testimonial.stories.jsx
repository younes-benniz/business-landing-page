import React from "react";
import { Testimonial } from ".";

export default {
	title: "Molecules",
	component: Testimonial,
};

const Template = (args) => <Testimonial {...args} />;

export const testimonial = Template.bind({});
