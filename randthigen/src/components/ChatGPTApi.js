import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function ChatGPTApi() {
	const [response, setResponse] = useState('');

	const [value, setValue] = useState('');
	const [message, setMessage] = useState(null);
	const [previousChats, setPreviousChats] = useState([]);
	const [currentTitle, setCurrentTitle] = useState('');
	const getMessages = async () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const response = await fetch(
				'http://localhost:8000/completions',
				options
			);
			console.log(response);
			const data = await response.json();
			console.log(data);
			setMessage(data.choices[0].message);
			console.log(message);
			setResponse(data.choices[0].message.content);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		//console.log(currentTitle, value, message);
		if (!currentTitle && value && message) {
			setCurrentTitle(value);
		}
		if (currentTitle && value && message) {
			setPreviousChats((previousChats) => [
				...previousChats,
				{
					title: currentTitle,
					role: 'user',
					content: value,
				},
				{
					title: currentTitle,
					role: message.role,
					content: message.content,
				},
			]);
		}
	}, [message, currentTitle]);

	console.log(previousChats);
	// console.log(message);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	// Send a request to the server with the prompt
	// 	axios
	// 		.post('/chat', { prompt })
	// 		.then((res) => {
	// 			// Update the response state with the server's response
	// 			setResponse(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// };

	return (
		<div className='App'>
			<div>
				{/* <form onSubmit={getMessages}>
					<input
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button type='submit'>Submit</button>
				</form> */}
				<div className='input-container'>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
					<div id='submit' onClick={getMessages}>
						Submit
					</div>
				</div>

				<ul className='feed'>
					{previousChats?.map((message, index) => (
						<li key={index}>
							<p className='role' style={{ color: 'red' }}>
								{message.role}
							</p>
							<p style={{ color: 'blue' }}>{message.content}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ChatGPTApi;
