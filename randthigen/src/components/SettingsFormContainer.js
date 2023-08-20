import {
	FormControlLabel,
	Radio,
	RadioGroup,
	FormControl,
	FormLabel,
} from '@mui/material';
import styles from './SettingsFormContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ChatGPTApi from './ChatGPTApi';

import {
	genreSelect,
	generateSelect,
	AISelect,
} from '../Reducer/selectionSlice';
const SettingsFormContainer = (props) => {
	const selection = useSelector((state) => state.selection);
	const msg = `
  generate random thing with these conditions: 
  Genre: ${selection.genre}
  Object: ${selection.generate}
  height: tall
  build: thin
  job: welder
  hobbies: reading, writing
  limit response to be two paragraph
  `;
	props.setMessage(msg);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	//const [genre, setGenre] = useState('fantasy');
	const handleGenreChange = (event, value) => {
		dispatch(genreSelect({ genre: value }));
	};
	const handleGenerateChange = (event, value) => {
		dispatch(generateSelect({ generate: value }));
	};
	const handleAIChange = (event, value) => {
		dispatch(AISelect({ AI: value }));
	};
	//console.log(message);
	// const getMessages = async () => {
	// 	const options = {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			message,
	// 			uid: user.uid,
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	};
	// 	try {
	// 		const response = await fetch(
	// 			'http://localhost:8000/api/post/completions',
	// 			options
	// 		);
	// 		console.log(response);
	// 		const data = await response.json();
	// 		console.log(data);
	// 		console.log(data.post);
	// 		setPosts(data.post);

	// 		console.log(posts);
	// 		// setMessage(data.choices[0].message);
	// 		// console.log(message);
	// 		// setResponse(data.choices[0].message.content);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	console.log('selection: ', selection);
	return (
		<div className={styles.settingscontainer}>
			<h1 className={styles.settings}>Settings</h1>
			{/* onClick={ChatGPTApi generateMessage={message}} */}

			{/* <h2 className={styles.genre}>Genre:</h2> */}

			<FormControl>
				<FormLabel id='genre-radio-buttons-group-label'>Genre</FormLabel>
				<RadioGroup
					aria-labelledby='genre-radio-buttons-group-label'
					defaultValue='Fantasy'
					name='genre-radio-buttons'
					onChange={handleGenreChange}
				>
					<FormControlLabel
						value='Fantasy'
						control={<Radio />}
						label='Fantasy'
					/>
					<FormControlLabel value='Sci-Fi' control={<Radio />} label='Sci-Fi' />
				</RadioGroup>
			</FormControl>
			<FormControl>
				<FormLabel id='generate-radio-buttons-group-label'>Generate</FormLabel>
				<RadioGroup
					aria-labelledby='generate-radio-buttons-group-label'
					defaultValue='Person'
					name='generate-radio-buttons'
					onChange={handleGenerateChange}
				>
					<FormControlLabel value='Person' control={<Radio />} label='Person' />
					<FormControlLabel value='Place' control={<Radio />} label='Place' />
					<FormControlLabel value='Thing' control={<Radio />} label='Thing' />
				</RadioGroup>
			</FormControl>
			<FormControl>
				<FormLabel id='AI-radio-buttons-group-label'>AI</FormLabel>
				<RadioGroup
					aria-labelledby='AI-radio-buttons-group-label'
					defaultValue='On'
					name='AI-radio-buttons'
					onChange={handleAIChange}
				>
					<FormControlLabel value='On' control={<Radio />} label='On' />
					<FormControlLabel value='Off' control={<Radio />} label='Off' />
				</RadioGroup>
			</FormControl>
			<div className={styles.aisettings}>
				<div className={styles.aiinput}>
					Height:
					<div className={styles.aisettingtextbox}>Tall</div>
				</div>
				<div className={styles.aiinput}>
					Build:
					<div className={styles.aisettingtextbox}>Thin</div>
				</div>
				<div className={styles.aiinput}>
					Job:
					<div className={styles.aisettingtextbox}>Welder</div>
				</div>
				<div className={styles.aiinput}>
					Hobbies:
					<div className={styles.aisettingtextbox}>Reading, Writing</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsFormContainer;
