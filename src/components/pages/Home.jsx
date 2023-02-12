import React from "react";
import { HomeTemplate } from "../templates/HomeTemplate";
import { Header } from "../organisms/Header";
import { HeroSection } from "../organisms/HeroSection";
import { StackSection } from "../organisms/StackSection";
import { FeaturesSection } from "../organisms/FeaturesSection";
import { AboutSection } from "../organisms/AboutSection";
import { PricingSection } from "../organisms/PricingSection";
import { TeamSection } from "../organisms/TeamSection";
import { TestimonialsSection } from "../organisms/TestimonialsSection";
import { FaqSection } from "../organisms/FaqSection";
import { ContactSection } from "../organisms/ContactSection";
import { SubscribeSection } from "../organisms/SubscribeSection";
import { Footer } from "../organisms/Footer";

export const HomePage = () => {
	return (
		<HomeTemplate
			header={<Header />}
			hero={
				<HeroSection
					title={"Unleash Your Tech Potential"}
					description={"Revolutionizing the Way You Work with Cutting-Edge Solutions."}
				/>
			}
			about={
				<AboutSection
					title={"The Story Behind the Tech Disruptors"}
					description={
						"Get to Know Our Vision, Mission, and the Team Behind the Tech Startup Revolutionizing the Industry. From our humble beginnings to our ambitious plans for the future, this is the story of our company and the passionate individuals driving it forward."
					}
				/>
			}
			features={
				<FeaturesSection
					title={"Our key features"}
					description={
						"Discover the innovative technology that streamlines your workflow and increases productivity. From intuitive interfaces to automation capabilities, explore the features that make us a game-changer in the tech industry."
					}
					features={[
						{
							number: 1,
							title: "Intuitive User Interface",
							icon: process.env.PUBLIC_URL + "/images/features-icon-01.png",
							description:
								"A seamless experience with easy navigation and simple task completion.",
						},
						{
							number: 2,
							title: "Automation at its Best",
							icon: process.env.PUBLIC_URL + "/images/features-icon-02.png",
							description:
								"Streamline your workflow and increase productivity with our automation capabilities.",
						},
						{
							number: 3,
							title: "Customizable to Your Needs",
							icon: process.env.PUBLIC_URL + "/images/features-icon-01.png",
							description:
								"Tailor our technology to your unique requirements with our highly customizable platform.",
						},
						{
							number: 4,
							title: "Data-driven Insights",
							icon: process.env.PUBLIC_URL + "/images/features-icon-02.png",
							description:
								"Make informed decisions with real-time analytics and reporting. Track progress and measure impact.",
						},
					]}
				/>
			}
			contact={<ContactSection />}
			faq={<FaqSection />}
			pricing={<PricingSection />}
			technology={<StackSection />}
			subscribe={<SubscribeSection />}
			team={<TeamSection />}
			testimonial={<TestimonialsSection />}
			footer={<Footer />}
		/>
	);
};
