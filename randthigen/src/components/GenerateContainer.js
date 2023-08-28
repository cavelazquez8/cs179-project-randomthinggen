import React, { useState, useEffect } from 'react';
import styles from './GenerateContainer.module.css';
import { useSelector } from 'react-redux';
import { newGen } from './newGen';

// person gen functions

const GenerateContainer = (props) => {
	const boxCont = props.text;
	const user = useSelector((state) => state.user);
	const [content, setContent] = useState(boxCont); // Default content
	const handleSave = () => {
		props.onSave(content);
	};
	const handleDelete = () => {
		//deletion code here
		console.log('delete attempt');
	};
	console.log(content);
	const getMessage = async () => {
		try {
			const options = {
				method: 'POST',
				body: JSON.stringify({
					message: content,
					uid: user.uid,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await fetch(
				'http://localhost:8000/api/post/completions_no_ai',
				options
			);
			console.log(response);
			const data = await response.json();
			console.log('Data from no ai', data);
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
	useEffect(() => {
		getMessage();
	}, []);
	return (
		<div className={styles.singlegeneratecontainer}>
			<div className={styles.generatecontainer}>{boxCont}</div>
			<button className={styles.savegeneratebutton} onClick={handleSave}>
				<div className={styles.save}>Save</div>
				<img
					className={styles.materialSymbolssaveIcon}
					alt=''
					src='/materialsymbolssave.svg'
				/>
			</button>
			<button className={styles.deletebutton} onClick={handleDelete}>
				<img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
			</button>
		</div>
	);
};

export default GenerateContainer;