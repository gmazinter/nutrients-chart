import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import NutrientChart from './components/NutrientChart';
import NutrientForm from './components/NutrientForm';

function App() {
	const [nutrients, setNutrients] = useState(null);

	const getNutrients = () => {
		axios
			.get('http://localhost:4000/nutrients')
			.then(response => setNutrients(response.data));
	};

	useEffect(() => {
		getNutrients();
	}, []);

	const handleChange = async (name, value) => {
		try {
			await axios.patch(
				`http://localhost:4000/nutrients/${name}?value=${value}`
			);
		} catch (e) {
			window.alert('an error occured updating the server.');
		} finally {
			getNutrients();
		}
	};

	return (
		<div className='main-container'>
			<NutrientForm nutrients={nutrients} handleChange={handleChange} />
			<NutrientChart nutrients={nutrients} />
		</div>
	);
}

export default App;
