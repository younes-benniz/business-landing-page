import React from "react";
import { SubscribeForm } from "../../molecules/SubscribeForm";
import { SectionTitle } from "../../atoms/SectionTitle";
import "./style.scss";

export const SubscribeSection = ({ ...props }) => {
	return (
		<>
			<SectionTitle
				title="Stay Up-to-Date"
				description="oin Our Newsletter and Receive the Latest Updates, Insights, and Industry Trends Directly to Your Inbox."
				style={{ marginBottom: "1rem" }}
			/>
			<SubscribeForm buttonTxt={"Subscribe"} />
		</>
	);
};
