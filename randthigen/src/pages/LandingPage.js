import SavedResultsContainer from '../components/SavedResultsContainer';
import SettingsFormContainer from '../components/SettingsFormContainer';
import GenerateContainer from '../components/GenerateContainer';
import ContainerFooter from '../components/ContainerFooter';
import styles from './LandingPage.module.css';

import ChatGPTApi from '../components/ChatGPTApi';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import generatecontainer from '../components/GenerateContainer.module.css';
import axios from 'axios';
import GenerateContainerAI from '../components/GenerateContainerAI';
import { newGen } from '../components/newGen';

const LandingPage = () => {
	const user = useSelector((state) => state.user);
	const selection = useSelector((state) => state.selection);
	const navigate = useNavigate();
	const [message, setMessage] = useState('');
	const [trigger, setTrigger] = useState(0);
	const [post, setPost] = useState([]);
	const [style, setStyle] = useState();
	const [savedResultsStyle, setSavedResultsStyle] = useState(''); // Add this state
	const [savedFooterStyle, setFooterStyle] = useState('');

	console.log(message);
	const logoutHandler = () => {
		firebase.auth().signOut();
		navigate('/');
		window.location.reload();
	};
	const [generatedContainers, setGeneratedContainers] = useState([]);
	const [savedResults, setSavedResults] = useState([]);
	const handleSave = (content) => {
		setSavedResults((prevResults) => [...prevResults, content]);
        if (user && user.uid) {
        axios.post('/api/user/saved', {
            userId: user.uid,
            content: content
        })
        .then(response => {
            console.log("Content saved to user saved:", response.data);
        })
        .catch(error => {
            console.error("Error saving content to user saved:", error);
        });
    }
	};

	const getPosts = () => {
		axios
			.get('/api/post/get_no_ai_posts', { params: { uid: user.uid } })
			.then(async (res) => {
				console.log('res.data.post: ', res.data.post);
				setPost([...res.data.post]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const postMessage = async () => {
		try {
			const options = {
				method: 'POST',
				body: JSON.stringify({
					message: newGen(),
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
	const handleGenerateButtonClick = async () => {
		// setGeneratedContainers((prevContainers) => [
		// 	...prevContainers,
		// 	<GenerateContainer
		// 		key={prevContainers.length}
		// 		className={generatecontainer.generatecontainer}
		// 		onSave={handleSave}
		// 	/>,
		// ]);
		await postMessage();
		await getPosts();
		console.log('getPosts: ', post);
		setGeneratedContainers([...post]);
	};
	
	
	useEffect(() => {
		if (selection.genre === 'Fantasy') {
			setStyle(styles.fantasy);
			setSavedResultsStyle(''); // Reset to default style
			setFooterStyle(''); // Reset to default style
		} else {
			setStyle(styles.scifi);
			setSavedResultsStyle(styles.scifisavedresultscontainer); // Apply sci-fi style to SavedResultsContainer
			
			
		}
		console.log('Genre:', selection.genre); // Add this line to check the genre value

	}, [selection.genre]);
	return (
		<div className={selection.genre === 'Sci-Fi' ? styles.scifilandingPage : styles.landingPage}>
			<div className={`${style}`}>
				<div className={selection.genre === 'Sci-Fi' ? styles.scifitabcontainer : styles.tabcontainer}>
					<div className={styles.selectionmenu}>
						<div className={styles.randomthinggen} onClick={() => navigate('/')}>RandomThingGen</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved} onClick={() => navigate('/saved')}>Saved</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved} onClick={() => navigate('/history')}>History</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>Chat</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>Analytics</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.profile}>Profile</div>
					</div>
					{user.accessToken ? (
						<button
							className={selection.genre === 'Sci-Fi' ? styles.scifiloginbuton : styles.loginbutton}
							onClick={() => logoutHandler()}
						>
							{/* <div className={styles.login}>Login</div> */}
							{/* <Link to='/' className={styles.login}> */}
							Logout
							{/* </Link> */}
							<img
								className={styles.materialSymbolsloginIcon}
								alt=''
								src='/materialsymbolslogin.svg'
							/>
						</button>
					) : (
						<button className={styles.loginbutton}>
							{/* <div className={styles.login}>Login</div> */}

							<Link to='/login' className={styles.login}>
								Login
							</Link>

							<img
								className={styles.materialSymbolsloginIcon}
								alt=''
								src='/materialsymbolslogin.svg'
							/>
						</button>
					)}
				</div>
				<SavedResultsContainer selection={selection} results={savedResults} savedResultsStyle={savedResultsStyle} />
				<SettingsFormContainer
					className={selection.genre === 'Sci-Fi' ? styles.scifisettingscontainer : ''}
					message={message}
					setMessage={setMessage}
					onGenerateButtonClick={handleGenerateButtonClick}
				/>

				{/* <button
					className={styles.generatebutton}
					onClick={() => setTrigger((trigger) => setTrigger(trigger + 1))}
				>
					<div className={styles.generate}>Generate</div>
					<img className={styles.mdimagicIcon} alt='' src='/mdimagic.svg' />
				</button> */}

				<div
					className={styles.generationscontainer}
					style={{ overflowY: 'scroll', height: '100vh' }}
				>
					<ChatGPTApi msgFromLanding={message} trigger={trigger} />
					{/* <ul className='feed'>{generatedContainers}</ul> */}
					<ul className='feed'>
						{post?.map((message, index) => (
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
			</div>
			<ContainerFooter selection={selection} results={savedResults} savedFooterStyle={savedFooterStyle} />
			<footer className={styles.copyright}>
				<div className={styles.privacyPolicyParent}>
					<div className={styles.saved}>Privacy Policy</div>
					<div className={styles.saved}>Terms of use</div>
				</div>
				<div className={styles.saved}>Test</div>
			</footer>
		</div>
	);
};

export default LandingPage;