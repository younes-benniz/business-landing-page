import React from "react";
import { SubscribeForm } from "../../molecules/SubscribeForm";
import { SectionTitle } from "../../atoms/SectionTitle";
import "./style.scss";

export const SubscribeSection = ({ ...props }) => {
	return (
		<>
			<SectionTitle
				title="Join our Newsletter"
				description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, libe"
				style={{ marginBottom: "1rem" }}
			/>
			<SubscribeForm buttonTxt={"Subscribe"} />
		</>
	);
};
