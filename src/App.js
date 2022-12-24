import "./App.css";
import ContainerCards from "./components/ContainerCards/ContainerCards";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<ContainerCards />
			<Footer />
		</div>
	);
}

export default App;
