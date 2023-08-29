import SavedResultsContainer from '../components/SavedResultsContainer';
import SettingsFormContainer from '../components/SettingsFormContainer';
import GenerateContainer from '../components/GenerateContainer';
import ContainerFooter from '../components/ContainerFooter';
import styles from './LandingPage.module.css';
import ChatGPTApi from '../components/ChatGPTApi';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import generatecontainer from '../components/GenerateContainer.module.css';
import axios from 'axios';
import GenerateContainerAI from '../components/GenerateContainerAI';
import { newGen } from '../components/newGen';
import LoginModal from "../components/LoginModal";

const LandingPage = () => {
	
	const [user, setUser] = useState(null); // To keep track of the user's login status
    const [showLoginModal, setShowLoginModal] = useState(false);
	const selection = useSelector((state) => state.selection);
	const navigate = useNavigate();
	const [message, setMessage] = useState('');
	const [trigger, setTrigger] = useState(0);
	const [post, setPost] = useState([]);
	const [style, setStyle] = useState();
	console.log(message);
	const [generatedContainers, setGeneratedContainers] = useState([]);
	const [savedResults, setSavedResults] = useState([]);

	useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup on component unmount
    }, []);

    const logoutHandler = () => {
		firebase.auth().signOut();
		navigate('/');
		window.location.reload();
	};
	const handleSave = (content) => {
		setSavedResults((prevResults) => [...prevResults, content]);
	};

	const handleShowLoginModal = () => {
    setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
    setShowLoginModal(false);
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
		} else {
			setStyle(styles.scifi);
		}
	}, [selection.genre]);
	return (
		<div className={styles.landingPage}>
			<div className={`${style}`}>
				<div className={styles.tabcontainer}>
					<div className={styles.selectionmenu}>
						<div className={styles.randomthinggen}>RandomThingGen</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>Saved</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>History</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>Chat</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved}>Analytics</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.profile}>Profile</div>
					</div>
					<button className={styles.loginbutton} onClick={user ? logoutHandler : handleShowLoginModal}>
            <div className={styles.login}>{user ? 'Logout' : 'Login'}</div>
            <img
              className={styles.materialSymbolsloginIcon}
              alt=""
              src="/materialsymbolslogin.svg"
            />
          </button>
				</div>
				<SavedResultsContainer results={savedResults} />
				<SettingsFormContainer
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
			<ContainerFooter />
			{showLoginModal && (
        <LoginModal onClose={handleCloseLoginModal}/>
      )}
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
