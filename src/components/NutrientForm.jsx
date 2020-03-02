import React from 'react';
import Select from 'react-select';

const globalOptions = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 4, label: '4' },
	{ value: 5, label: '5' },
	{ value: 6, label: '6' }
];

export default ({ nutrients, handleChange }) => {
	return (
		<form>
			{nutrients &&
				Object.keys(nutrients).map(x => {
					const selectValue = {
						value: nutrients[x],
						label: nutrients[x]
					};
					return (
						<label key={x}>
							<p>{x}</p>
							<Select
								name={x}
								value={selectValue}
								options={globalOptions}
								onChange={selected =>
									handleChange(x, selected.value)
								}
							/>
						</label>
					);
				})}
		</form>
	);
};
