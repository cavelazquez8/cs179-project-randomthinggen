import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GenerateContainer from './GenerateContainer';
import GenerateContainerAI from './GenerateContainerAI';

function ChatGPTApi(props) {
	const [response, setResponse] = useState('');
	const [savedResults, setSavedResults] = useState([]);

	const [value, setValue] = useState('');
	const [message, setMessage] = useState(null);
	const [previousChats, setPreviousChats] = useState([]);
	const [currentTitle, setCurrentTitle] = useState('');
	const [posts, setPosts] = useState([]);
	const user = useSelector((state) => state.user);
	const selection = useSelector((state) => state.selection);
	const uid = user.uid;
	const trigg = props.trigger;
	const handleSave = (value) => {
		setSavedResults((prevResults) => [...prevResults, value]);
	};
	console.log(props);
	console.log('uid:', uid);
	console.log('msgFromLanding: ', props.msgFromLanding);
	console.log(trigg);

	//씨발 뭐지? Too many re-renders.
	//setValue(props.msgFromLanding);
	const getMessages = async () => {
		//e.preventDefault();
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: value,
				uid: user.uid,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const response = await fetch(
				'http://localhost:8000/api/post/completions',
				options
			);
			console.log(response);
			const data = await response.json();
			console.log(data);
			console.log(data.post);
			setPosts(data.post);
			SVGTextContentElement();
			console.log(posts);
			// setMessage(data.choices[0].message);
			// console.log(message);
			// setResponse(data.choices[0].message.content);
		} catch (error) {
			console.error(error);
		}
	};
	//getMessages();
	useEffect(() => {
		setValue(props.msgFromLanding);
		console.log('props.generateMessage: ', props.msgFromLanding);
		//getMessages();
	}, [props]);
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
	// useEffect(() => {
	// 	setValue(props.message);
	// 	getMessages();
	// }, [props.message]);
	// useEffect(async () => {
	// 	//console.log('Hello!!!!!!!!!!', props.trigger);
	// 	setValue(props.msgFromLanding);
	// 	await getMessages();
	// }, [props.trigger]);
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
					<`button` type='submit'>Submit</>
				</form> */}
				{selection.AI === 'On' && (
					<div className='input-container'>
						<textarea
							value={value}
							rows='15'
							cols='90'
							onChange={(e) => setValue(e.target.value)}
						/>
						<button
							style={{
								backgroundColor: 'white',
							}}
							id='submit'
							onClick={getMessages}
						>
							Submit
						</button>
					</div>
				)}

				{/* <ul className='feed'>
					{previousChats?.map((message, index) => (
						<li key={index}>
							<p className='role' style={{ color: 'red' }}>
								{message.role}
							</p>
							<p style={{ color: 'white' }}>{message.content}</p>
						</li>
					))}
				</ul> */}

				<ul className='feed'>
					{posts?.map((message, index) => (
						// <li key={index}>
						// 	<p className='role' style={{ color: 'red' }}>
						// 		{message.role}
						// 	</p>
						// 	<p style={{ color: 'white' }}>{message.content}</p>
						// </li>
						<GenerateContainerAI text={message.content} onSave={handleSave} />
					))}
				</ul>
			</div>
			{/* <GenerateContainer /> */}
		</div>
	);
}

export default ChatGPTApi;