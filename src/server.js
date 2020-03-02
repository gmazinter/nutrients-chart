const express = require('express');
const cors = require('cors');
const app = express();

const nutrients = {
	nitrogen: 2,
	potassium: 6,
	phosphorous: 3
};

const corsOptions = {
	origin: `http://localhost:3000`,
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/sanity', (req, res) => {
	res.send('hello there teeeee');
});

app.get('/nutrients', (req, res) => {
	res.send(nutrients);
	res.end();
});

app.patch('/nutrients/:name', (req, res) => {
	nutrients[req.params.name] = req.query.value;
	console.log(nutrients);
	res.end();
});

app.listen(4000, () => {
	console.log(`listening on port 4000`);
});
