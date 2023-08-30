import React, { useState } from 'react';
import styles from './GenerateContainer.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';

let promval = "";

const GenerateContainerAI = (props) => {
	console.log('PROPS: ', props);
	const boxCont = props.text;

	const [content, setContent] = useState(boxCont); // Default content
	const handleBranch = () => {
		console.log('branch attempt');
		props.getContext((boxCont + " Provide a three-paragraph description of a " + promval + 
		" related to the person/place/thing described above." ));
		// props.onBranch();
	};
	const handleSave = () => {
		props.onSave(content);
	};
	const handleAI = () => {
		console.log('box: ', boxCont);
		props.getContext((boxCont + "Refine this description to three paragraphs," +
		" expanding the reader's understanding of the person/place/thing described" +
			" and providing new information consistent with the information provided." ));
		// props.onSave(boxCont);
	};
	const handlePrompt = () => {
		props.getContext((boxCont + "Create a writing prompt of less than 100 words, " +
		" using this description as a basis. Include questions for the writer to answer in their story." +
		" Only provide the prompt, as the writer will also be able to the description, so restating the" +
		" information found within is unnecessary."));
	};
	const user = useSelector((state) => state.user);
	const handleDelete = async () => {
		//deletion code here
		console.log('delete attempt');
		try {
			await axios.delete('/api/post/delete', {
				params: { content: boxCont },
			});
			axios
				.get('/api/post/completions_with_no_generation', {
					params: { uid: user.uid },
				})
				.then(async (res) => {
					// await console.log('res.data.post.withoutGen: ', res.data.post);
					// await console.log('res.data.post.withoutGen: ', res);
					props.setPosts([...res.data.post]);
				})
				.catch((err) => {
					console.log(err);
				});
			// props.onDelete()
		} catch (err) {
			console.error(err);
		}
	};
	console.log(content);
	return (
		<div className={styles.singlegeneratecontainer}>
			<div className={styles.generatecontainer}>{boxCont}</div>
				<Dropdown>
					<Dropdown.Toggle className={styles.branchDrop} size="sm" variant='secondary' id='dropdown-basic'>Branch Out!
					<img
						className={styles.materialsymbolsaiIcon}
						alt=''
						src='/materialsymbolsbranch.svg'
					/>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => {promval = "person, such as a family member, friend, or significant other"; handleBranch();}}>Make a Related Person</Dropdown.Item>
						<Dropdown.Item onClick={() => {promval = "place, such as a city or settlement"; handleBranch();}}>Make a Related Place</Dropdown.Item>
						<Dropdown.Item onClick={() => {promval = "valuable and important object"; handleBranch();}}>Make a Related Thing</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			<button className={styles.aigeneratebutton} onClick={handleAI}>
				<div className={styles.save}>Expand with AI</div>
				<img
					className={styles.materialsymbolsaiIcon}
					alt=''
					src='/materialsymbolsai.svg'
				/>
			</button>
			<button className={styles.promptgeneratebutton} onClick={handlePrompt}>
				<div className={styles.save}>Create a Writing Prompt!</div>
				<img
					className={styles.materialsymbolsaiIcon}
					alt=''
					src='/materialsymbolsprompt.svg'
				/>
			</button>
			<button className={styles.savegeneratebutton} onClick={handleSave}>
				<div className={styles.save}>Save</div>
				<img
					className={styles.materialsymbolsaiIcon}
					alt=''
					src='/materialsymbolssave.svg'
				/>
			</button>
			{/* 
			<button className={styles.deletebutton} onClick={handleDelete}>
				<img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
			</button> */}
		</div>
	);
};

export default GenerateContainerAI;
