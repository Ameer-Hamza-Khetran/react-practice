import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [counter, setCounter] = useState(5);
	// let  counter = 5;
	const addValue = () => {
		console.log('clicked', counter );
		// counter = counter + 1;
		if(counter < 20) {
		setCounter(counter + 1);
		}
	}

	const decreaseValue = () => {
		if(counter > 0) {
			setCounter(counter -1);
		}
	}
	return (
		<>
		<h1>React & Hooks</h1>
		<h2>Counter Value: {counter}</h2>
		<button onClick={addValue}>Increase Value {counter}</button>
		<br />
		<button onClick= {decreaseValue}>Decrease Value {counter}</button>
		<p>footer: {counter}</p>
		</>
	)
}

export default App
