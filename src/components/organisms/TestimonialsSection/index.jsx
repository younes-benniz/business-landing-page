import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SvgIcon } from "../../atoms/SvgIcon";
import { SectionTitle } from "../../atoms/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

export const TestimonialsSection = ({ ...props }) => {
	return (
		<>
			<SectionTitle
				title="What Our Clients Say"
				description="our clients send us a bunch of smiles for our services and we love them"
			/>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={false}
			>
				<div className="client-testimonial">
					<img
						className="client-img"
						src={process.env.PUBLIC_URL + "/team-member.jpg"}
						alt="client"
					/>
					<h3 className="client-name">John Doe</h3>
					<p className="client-location">Sydney, Australia</p>
					<div className="stars">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
					</div>
					<div className="feedback-quote">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-left.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
						<p className="client-feedback">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente
							iste quod quidem tempore dolores laborum libero rem aspernatur quam
							obcaecati non vel culpa doloremque recusandae, voluptas alias saepe
							reiciendis.
						</p>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-right.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
					</div>
				</div>

				<div className="client-testimonial">
					<img
						className="client-img"
						src={process.env.PUBLIC_URL + "/team-member.jpg"}
						alt="client"
					/>
					<h3 className="client-name">John Doe</h3>
					<p className="client-location">Sydney, Australia</p>
					<div className="stars">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
					</div>
					<div className="feedback-quote">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-left.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
						<p className="client-feedback">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente
							iste quod quidem tempore dolores laborum libero rem aspernatur quam
							obcaecati non vel culpa doloremque recusandae, voluptas alias saepe
							reiciendis.
						</p>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-right.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
					</div>
				</div>
				<div className="client-testimonial">
					<img
						className="client-img"
						src={process.env.PUBLIC_URL + "/team-member.jpg"}
						alt="client"
					/>
					<h3 className="client-name">John Doe</h3>
					<p className="client-location">Sydney, Australia</p>
					<div className="stars">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/star-yellow.svg"}
							size="x-small"
							hasText={false}
							isLink={false}
						/>
					</div>
					<div className="feedback-quote">
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-left.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
						<p className="client-feedback">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente
							iste quod quidem tempore dolores laborum libero rem aspernatur quam
							obcaecati non vel culpa doloremque recusandae, voluptas alias saepe
							reiciendis. obcaecati non vel culpa doloremque recusandae, voluptas
							alias saepe reiciendis.
						</p>
						<SvgIcon
							svgSrc={process.env.PUBLIC_URL + "/quote-right.svg"}
							size="small"
							hasText={false}
							isLink={false}
						/>
					</div>
				</div>
			</Carousel>
		</>
	);
};
