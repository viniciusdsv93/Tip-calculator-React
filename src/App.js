import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { Title } from "./components/Title";

function App() {
	const [billState, setBillState] = useState(0);
	const [numPeople, setNumPeople] = useState(0);
	return (
		<main>
			<Title />
			<Container
				billState={billState}
				setBillState={setBillState}
				numPeople={numPeople}
				setNumPeople={setNumPeople}
			/>
		</main>
	);
}

export default App;
