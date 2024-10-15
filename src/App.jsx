import { useState } from "react";
import "./App.css";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="container">
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
