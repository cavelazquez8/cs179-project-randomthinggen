import axios from 'axios';
var getOnePiece = (role) => {
	console.log('Get Post!');
	axios
		.get('/api/piece/get_piece', { params: { role: `${role}` } })
		.then(async (res) => {
			console.log('res.data.post[0].content: ', res.data.post[0].content);
			return res.data.post[0].content;
		})
		.catch((err) => {
			console.log(err);
		});
};

var getWord = (role) =>
	axios
		.get('/api/piece/get_piece', { params: { role: `${role}` } })
		.then(async (res) => {
			// await console.log('nameStart: ', res.data.post[0].content);
			// firstName_v = res.data.post[0].content;
			//res.status(200).json({ result: firstName });
			console.log('RES: ', res.data.post[0].content);
			return res.data.post[0].content;
		})
		.catch((err) => {
			console.log(err);
		});

const postMessage = async (message, role) => {
	try {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: message,
				role: `${role}`,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const response = await fetch(
			'http://localhost:8000/api/piece/post_piece',
			options
		);
		console.log(response);
		const data = await response.json();
		console.log(role, ':', data);
		//console.log(data);
		// setPosts(data.post);

		// console.log(posts);
		// setMessage(data.choices[0].message);
		// console.log(message);
		// setResponse(data.choices[0].message.content);
	} catch (error) {
		console.error(error);
	}
};

const putPieceToDB = async () => {
	var nameStart = [
		'Ab',
		'Ac',
		'Ae',
		'Ag',
		'Ai',
		'Al',
		'Am',
		'An',
		'Ap',
		'Ar',
		'As',
		'At',
		'Ax',
		'Ba',
		'Be',
		'Bi',
		'Bo',
		'Bu',
		'Ca',
		'Ci',
	];
	// const getPosts = (role) => {
	// 	console.log('Get Post!');
	// 	axios
	// 		.get('/api/piece/get_piece', { params: { role: `${role}` } })
	// 		.then(async (res) => {
	// 			console.log(role, res.data.post[0]);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	// const postMessage = async (message, role) => {
	// 	try {
	// 		const options = {
	// 			method: 'POST',
	// 			body: JSON.stringify({
	// 				message: message,
	// 				role: `${role}`,
	// 			}),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		};
	// 		const response = await fetch(
	// 			'http://localhost:8000/api/piece/post_piece',
	// 			options
	// 		);
	// 		console.log(response);
	// 		const data = await response.json();
	// 		console.log(role, ':', data);
	// 		//console.log(data);
	// 		// setPosts(data.post);

	// 		// console.log(posts);
	// 		// setMessage(data.choices[0].message);
	// 		// console.log(message);
	// 		// setResponse(data.choices[0].message.content);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// nameStart.forEach(async (message) => {
	// 	console.log('Message: ', message);
	// 	await postMessage(message, 'nameStart');
	// });
	// await getPosts('nameStart');
};

export { putPieceToDB, getOnePiece, postMessage, getWord };
