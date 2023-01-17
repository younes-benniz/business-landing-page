import React from "react";
import { Header } from ".";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { Navlist } from "../../molecules/Navlist";

export default {
	title: "Molecules/Header",
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});

header.args = {
	logo: <Logo hasImg={true} hasTxt={true} />,
	navlist: <Navlist items={["Home", "contact", "features", "pricing", "about", "projects"]} />,
	button: <Button mode={"secondary"} />,
};
