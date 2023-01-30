import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Testimonial } from "../../molecules/Testimonial";
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
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				swipeable={false}
			>
				<Testimonial stars={5} />
				<Testimonial stars={3} />
				<Testimonial stars={4} />
			</Carousel>
		</>
	);
};
