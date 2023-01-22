import "./components/_settings/base.scss";
import { Header } from "./components/organisms/Header";
import { HeroSection } from "./components/organisms/HeroSection";
import { StackSection } from "./components/organisms/StackSection";
import { FeaturesSection } from "./components/organisms/FeaturesSection";
import { AboutSection } from "./components/organisms/AboutSection";
import { PricingSection } from "./components/organisms/PricingSection";
import { TeamSection } from "./components/organisms/TeamSection";
import { TestimonialsSection } from "./components/organisms/TestimonialsSection";
import { FaqSection } from "./components/organisms/FaqSection";
import { ContactSection } from "./components/organisms/ContactSection";
import { SubscribeSection } from "./components/organisms/SubscribeSection";
import { Footer } from "./components/organisms/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<AboutSection />
			<StackSection />
			<FeaturesSection />
			<PricingSection />
			<TeamSection />
			<TestimonialsSection />
			<FaqSection />
			<ContactSection />
			<SubscribeSection />
			<Footer />
		</div>
	);
}

export default App;
