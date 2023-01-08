import "./components/_settings/base.scss";
import { Header } from "./components/molecules/Header";
import { HeroSection } from "./components/organisms/HeroSection";
import { StackSection } from "./components/organisms/StackSection";
import { FeaturesSection } from "./components/organisms/FeaturesSection";
import { AboutSection } from "./components/organisms/AboutSection";
function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			{/* <StackSection /> */}
			<FeaturesSection />
			<AboutSection />
		</div>
	);
}

export default App;
