const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//mongodb+srv://skang121:<password>@cluster0.wka1sml.mongodb.net/?retryWrites=true&w=majority
//const API_KEY = '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';
const API_KEY = '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';
app.post('/completions', async (req, res) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: req.body.message }],
			max_tokens: 100,
		}),
	};

	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options
		);
		const data = await response.json();
		console.log('data is ');
		console.log(data);
		res.send(data);
	} catch (error) {
		console.log('data is ');
		console.error(error);
	}
});

app.listen(PORT, () => {
	mongoose
		.connect(
			'mongodb+srv://skang121:Jl2LLsKH2uMxr5CF@cluster0.wka1sml.mongodb.net/?retryWrites=true&w=majority'
		)
		.then(() => {
			console.log('Connecting MongoDB');
			console.log('Your server is running on PORT ' + PORT);
		})
		.catch((err) => {
			console.log(`${err}`);
		});
});
