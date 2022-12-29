import "./components/_settings/base.scss";
import { Button } from "./components/atoms/Button";
import { Header } from "./components/molecules/Header";
import { HeroSection } from "./components/organisms/HeroSection";
function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
		</div>
	);
}

export default App;
