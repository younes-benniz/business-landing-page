import "./components/_settings/base.scss";
import { Header } from "./components/organisms/Header";
import { HeroSection } from "./components/organisms/HeroSection";
import { StackSection } from "./components/organisms/StackSection";
import { FeaturesSection } from "./components/organisms/FeaturesSection";
import { AboutSection } from "./components/organisms/AboutSection";
import MediaQuery from "react-responsive";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<AboutSection />
			<StackSection />
			<FeaturesSection />
		</div>
	);
}

export default App;
