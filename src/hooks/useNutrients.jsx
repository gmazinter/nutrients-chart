import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:4000/data')
			.then(response => setData(response.data));
	}, []);

	return data;
};
