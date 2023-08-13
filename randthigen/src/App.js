import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useState, useEffect } from 'react';

function App() {
	const [description, setDescription] = useState('');
	const [selection, setSelection] = useState('PERSON');
	// const [prompt, setPrompt] = useState('');
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

	const handleSelectionChange = (event) => {
		console.log(event.target.value);
		console.log(event.target.type);
		setSelection(event.target.value);
	};

	const generateDescription = async () => {
		let randomText;

		switch (selection) {
			case 'PERSON':
				randomText = 'https://randomuser.me/api/?inc=name';
				break;
			default:
				randomText = '';
		}
		try {
			const response = await axios.get(randomText);
			if (selection === 'PERSON') {
				const person = response.data.results[0];
				const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
				setDescription(fullName);
			}
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='title'>RandomThingGen</div>
				<div className='selectors'>
					<input
						type='radio'
						name='selector'
						value='PERSON'
						checked={selection === 'PERSON'}
						onChange={handleSelectionChange}
					/>
					PERSON
					<input
						type='radio'
						name='selector'
						value='PLACE'
						checked={selection === 'PLACE'}
						onChange={handleSelectionChange}
					/>
					PLACE
					<input
						type='radio'
						name='selector'
						value='THING'
						checked={selection === 'THING'}
						onChange={handleSelectionChange}
					/>
					THING
				</div>
				<button onClick={generateDescription}>Generate</button>
			</header>
			<body>
				<div className='descBox'>{description}</div>
			</body>
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
							<p className='role'>{message.role}</p>
							<p>{message.content}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
