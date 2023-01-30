import React from "react";
import { TeamCard } from ".";

export default {
	title: "Molecules/TeamCard",
	component: TeamCard,
};

const Template = (args) => <TeamCard {...args} />;

export const teamCart = Template.bind({});
