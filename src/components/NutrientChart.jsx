import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default ({ nutrients }) => {
	const barData = nutrients
		? Object.keys(nutrients).map(key => ({
				name: key,
				value: nutrients[key]
		  }))
		: [];
	return (
		<BarChart width={730} height={250} data={barData}>
			<XAxis dataKey='name' />
			<YAxis dataKey='value' />
			<Tooltip />
			<Legend />
			<Bar dataKey='value' fill='#82ca9d' />
		</BarChart>
	);
};
