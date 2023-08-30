import SavedResultsContainer from '../components/SavedResultsContainer';
import SettingsFormContainer from '../components/SettingsFormContainer';
//import GenerateContainer from '../components/GenerateContainer';
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
import ImageUpload from '../components/ImageUpload';
import styled from 'styled-components';
import { putPieceToDB } from '../components/postPieces';
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
	const [image, setImage] = useState('');
	const [context, getContext] = useState('');
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
		if (user && user.uid) {
			axios
				.post('/api/user/saved', {
					userId: user.uid,
					content: content,
				})
				.then((response) => {
					console.log('Content saved to user saved:', response.data);
				})
				.catch((error) => {
					console.error('Error saving content to user saved:', error);
				});
		}
	};

	const handleShowLoginModal = () => {
    setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    };

	const getPosts = () => {
		const params = user ? { uid: user.uid } : {};
		axios
			.get('/api/post/get_no_ai_posts', { params })
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
			const message = await newGen();
			const options = {
				method: 'POST',
				body: JSON.stringify({
					message: message,
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
			//console.log('RESPONSE: ', response.json);
			const data = await response.json();
			console.log('Data from no ai', data.post[data.post.length - 1]);
			setPost((posts) => {
				return [...posts, data.post[data.post.length - 1]];
			});
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
		//await getPosts();
		console.log('getPosts: ', post);
		setGeneratedContainers([...post]);
	};

	const changeBackground = () => {
		let imagePath = './' + image;
		console.log('imagePath: ', imagePath);

		const newStyle = styled.div`
			align-self: stretch;
			height: 64.06rem;
			flex-direction: column;
			padding: var(--padding-xl) 15rem;
			box-sizing: border-box;
			align-items: center;
			position: relative;
			gap: 4.25rem;
			background-image: url('');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
		`;
		setStyle(styles.customized);
	};

	useEffect(() => {
		if (selection.genre === 'Fantasy') {
			setStyle(styles.fantasy);
		} else {
			setStyle(styles.scifi);
		}
	}, [selection.genre]);
	// useEffect(() => {
	// 	//getPosts();
	// }, []);
	// useEffect(() => {
	// 	putPieceToDB();
	// }, []);
	useEffect(() => {
		if (context === '') return;
		const textToSent = `${context}
		Refine this description to three paragraphs,
		expanding the reader's understanding of the person/place/thing described.
		and providing new information consistent with the informatino provided
		`;
		console.log('textToSent:', textToSent);
		const getMessages = async () => {
			//e.preventDefault();
			const options = {
				method: 'POST',
				body: JSON.stringify({
					message: textToSent,
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
				setPost((array) => {
					return [...array, data.post[data.post.length - 1]];
				});
				console.log(post);
				// setMessage(data.choices[0].message);
				// console.log(message);
				// setResponse(data.choices[0].message.content);
			} catch (error) {
				console.error(error);
			}
		};
		getMessages();
	}, [context]);
	return (
		<div className={selection.genre === 'Sci-Fi' ? styles.scifilandingPage : styles.landingPage}>
			<div className={`${style}`}>
				<div className={selection.genre === 'Sci-Fi' ? styles.scifitabcontainer : styles.tabcontainer}>
					<div className={styles.selectionmenu}>
						<div
							className={styles.randomthinggen}
							onClick={() => navigate('/')}
						>
							RandomThingGen
						</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved} onClick={() => navigate('/saved')}>
							Saved
						</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.saved} onClick={() => navigate('/history')}>
							History
						</div>
						<div className={styles.selectionmenuChild} />
						<div className={styles.profile}>Profile</div>
					</div>
					<ImageUpload setImage={setImage} />
					<button
						// className={styles.loginbutton}
						onClick={() => changeBackground()}
					>
						Change the background
					</button>
					<button className={selection.genre === 'Sci-Fi' ? styles.scifiloginbutton : styles.loginbutton} onClick={user ? logoutHandler : handleShowLoginModal}>
            <div className={styles.login}>{user ? 'Logout' : 'Login'}</div>
            <img
              className={styles.materialSymbolsloginIcon}
              alt=""
              src="/materialsymbolslogin.svg"
            />
          </button>
				</div>
				{/* <SavedResultsContainer results={savedResults} /> */}
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
					{post.length !== 0 && (
						<div className={styles.divider}>
							<span></span>
							<span>True Random</span>
							<span></span>
						</div>
					)}
					<ul className='feed'>
						{post?.map((message, index) => (
							// <li key={index}>
							// 	<p className='role' style={{ color: 'red' }}>
							// 		{message.role}
							// 	</p>
							// 	<p style={{ color: 'white' }}>{message.content}</p>
							// </li>
							<GenerateContainerAI
								text={message.content}
								onSave={handleSave}
								setPosts={setGeneratedContainers}
								getContext={getContext}
							/>
						))}
					</ul>
				</div>
			</div>
			
			{showLoginModal && (
        <LoginModal onClose={handleCloseLoginModal}/>
      )}

		</div>
	);
};

export default LandingPage;