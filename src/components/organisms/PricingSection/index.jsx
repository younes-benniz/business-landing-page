import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/Button";
import "./style.scss";

export const PricingSection = ({ ...props }) => {
	return (
		<section className="pricing-section">
			<h1 className="section-title">Choose the plan that fits for your team</h1>
			<p className="section-description">
				Deploy your sites to global infrastructure in seconds. No credit card required
			</p>
			<div className="pricing-cards">
				<div className="card">
					<div className="card-header">
						<div className="card-title">
							<h2>Basic</h2>
						</div>
						<div className="card-price">
							<h2>
								<small>$</small>99<span>/ Month</span>
							</h2>
						</div>
					</div>
					<div className="card-body">
						<div className="card-description">
							<ul>
								<li>Pure HTML &amp; CSS</li>
								<li>Responsive Design</li>
								<li>Well-commented Code</li>
								<li>Easy to Use</li>
							</ul>
						</div>
					</div>
					<div className="card-footer">
						<div className="card-action">
							<Button size="large" label="Buy Now!" />
						</div>
					</div>
				</div>
				<div className="card featured-item">
					<div className="card-header">
						<div className="card-status">
							<span>
								<strong>Popular</strong>
							</span>
						</div>
						<div className="card-title">
							<h2>Gold</h2>
						</div>
						<div className="card-price">
							<h2>
								<small>$</small>199<span>/ M</span>
							</h2>
						</div>
					</div>
					<div className="card-body">
						<div className="card-description">
							<ul>
								<li>Pure HTML &amp; CSS</li>
								<li>Responsive Design</li>
								<li>Well-commented Code</li>
								<li>Easy to Use</li>
							</ul>
						</div>
					</div>
					<div className="card-footer">
						<div className="card-action">
							<Button size="large" label="Buy Now!" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-header">
						<div className="card-title">
							<h2>Platinum</h2>
						</div>
						<div className="card-price">
							<h2>
								<small>$</small>299<span>/ M</span>
							</h2>
						</div>
					</div>
					<div className="card-body">
						<div className="card-description">
							<ul>
								<li>Pure HTML &amp; CSS</li>
								<li>Responsive Design</li>
								<li>Well-commented Code</li>
								<li>Easy to Use</li>
							</ul>
						</div>
					</div>
					<div className="card-footer">
						<div className="card-action">
							<Button size="large" label="Buy Now!" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
