import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { SvgIcon } from "../../atoms/SvgIcon";

export const FaqSection = ({ ...props }) => {
	const [isActive, setIsActive] = useState(true);
	return (
		<section className="faq-section">
			<h1 className="faq-section-title">Frequently Asked questions</h1>
			<p className="faq-section-description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, veniam!
			</p>
			<div className="questions-wrapper">
				<div className={`question-card ${isActive ? "active" : ""}`}>
					<div className="question-wrapper">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/question.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
						<p className="question">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
						</p>
						<SvgIcon
							svgSrc={
								process.env.PUBLIC_URL + `/arrow-${isActive ? "up" : "down"}.svg`
							}
							size="small"
							hasText={false}
							isLink={false}
							onClick={() => setIsActive(!isActive)}
						/>
					</div>
					{isActive && (
						<div className="answer-wrapper">
							<p className="answer">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
								nobis veritatis in dolores incidunt consequuntur? Lorem ipsum dolor
								sit amet consectetur adipisicing elit. In ab minima ratione, magnam
								perspiciatis ullam!
							</p>
						</div>
					)}
				</div>
				<div className={`question-card ${isActive ? "active" : ""}`}>
					<div className="question-wrapper">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/question.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
						<p className="question">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
						</p>
						<SvgIcon
							svgSrc={
								process.env.PUBLIC_URL + `/arrow-${isActive ? "up" : "down"}.svg`
							}
							size="small"
							hasText={false}
							isLink={false}
							onClick={() => setIsActive(!isActive)}
						/>
					</div>
					{isActive && (
						<div className="answer-wrapper">
							<p className="answer">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
								nobis veritatis in dolores incidunt consequuntur? Lorem ipsum dolor
								sit amet consectetur adipisicing elit. In ab minima ratione, magnam
								perspiciatis ullam!
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
