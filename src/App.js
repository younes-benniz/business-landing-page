import "./components/_settings/base.scss";
import { Header } from "./components/molecules/Header";
import { HeroSection } from "./components/organisms/HeroSection";
import { StackSection } from "./components/organisms/StackSection";
function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<StackSection />
		</div>
	);
}

export default App;
