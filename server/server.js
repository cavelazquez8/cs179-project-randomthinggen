const PORT = 8000;
const express = require('express');
//const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
	// 이 코드가 CORS를 잡는데 필요한 부분
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

const { User } = require('./Model/User.js');
//app.use(cors());
//mongodb+srv://skang121:<password>@cluster0.wka1sml.mongodb.net/?retryWrites=true&w=majority
//const API_KEY = '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';
// const API_KEY = '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';

// const { Chat } = require('./Model/Chat');

// app.post('/completions', async (req, res) => {
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			Authorization: `Bearer ${API_KEY}`,
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			model: 'gpt-3.5-turbo',
// 			messages: [{ role: 'user', content: req.body.message }],
// 			max_tokens: 100,
// 		}),
// 	};

// 	try {
// 		const response = await fetch(
// 			'https://api.openai.com/v1/chat/completions',
// 			options
// 		);
// 		const data = await response.json();
// 		const chatPostQuestion = new Chat({
// 			role: 'user',
// 			content: req.body.message,
// 		});
// 		await chatPostQuestion.save();
// 		const chatPostAnswer = new Chat({
// 			role: 'assistant',
// 			content: data.choices[0].message.content,
// 		});
// 		await chatPostAnswer.save();
// 		console.log('data is ');
// 		console.log(data.choices[0].message.content);
// 		res.send(data);
// 	} catch (error) {
// 		console.log('data is ');
// 		console.error(error);
// 	}
// });

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

app.use('/api/post', require('./Router/Post.js'));
//app.use('/api/user', require('./Router/User.js'));

app.post('/api/user/register', (req, res) => {
	console.log(req.body);
	const userData = new User(req.body);
	userData
		.save()
		.then(() => {
			res.status(200).json({ success: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});
