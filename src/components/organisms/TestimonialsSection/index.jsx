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
				<Testimonial
					clientName="Sarah Johnson"
					clientLocation="London, UK"
					stars={5}
					feedback="I've been using the technology for several months now, and I can honestly say it's made a huge difference to my work. The automation capabilities have saved me so much time, and the data insights have been invaluable. I highly recommend it to anyone looking to streamline their workflow and increase efficiency."
				/>
				<Testimonial
					clientName="David Lee"
					clientLocation="Sydney, Australia"
					stars={4}
					feedback="The user-friendly interface was what initially drew me to the technology, but I've since discovered so much more. The customization options have allowed me to tailor the platform to my specific needs, and the data-driven insights have been incredibly helpful. I couldn't be happier with my choice."
				/>
				<Testimonial
					clientName="Maria Ramirez"
					clientLocation="Mexico City, Mexico"
					stars={3}
					feedback="I was skeptical at first, but after using the technology, I'm a complete convert. It has made my work so much easier, and I love the automation capabilities. I would recommend it to anyone looking for a comprehensive solution that truly streamlines their workflow."
				/>
			</Carousel>
		</>
	);
};
