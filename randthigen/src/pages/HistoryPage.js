import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import axios from 'axios';
import ContainerFooter from '../components/ContainerFooter';
import firebase from '../firebase.js';
import HistoryContainer from '../components/HistoryContainer';
import { Link } from 'react-router-dom';
import GenerateContainerAI from '../components/GenerateContainerAI';
import SavedResultsContainer from '../components/SavedResultsContainer';
//import { useEffect } from 'react';
function HistoryPage() {
	const user = useSelector((state) => state.user);
	const [userHistory, setUserHistory] = useState([]);
	const navigate = useNavigate();
	const [post, setPost] = useState([]);
	const [postAI, setPostAI] = useState([]);
	const [postNoAI, setPostNoAI] = useState([]);
	const [savedResults, setSavedResults] = useState([]);
	const logoutHandler = () => {
		firebase.auth().signOut();
		navigate('/');
		window.location.reload();
	};
	const getPostsNoAI = () => {
		axios
			.get('/api/post/get_no_ai_posts', { params: { uid: user.uid } })
			.then(async (res) => {
				console.log('res.data.post No AI: ', res.data.post);
				setPost((array) => [...array, ...res.data.post]);
				setPostNoAI((array) => [...array, ...res.data.post]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getPostsAI = () => {
		axios
			.get('/api/post/completions_with_no_generation', {
				params: { uid: user.uid },
			})
			.then(async (res) => {
				// await console.log('res.data.post.withoutGen: ', res.data.post);
				// await console.log('res.data.post.withoutGen: ', res);
				console.log('res.data.post: ', res.data.post);
				setPost((array) => [...array, ...res.data.post]);
				setPostAI((array) => [...array, ...res.data.post]);
				console.log('POST: ', post);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getDatas = async () => {
		await getPostsAI();
		await getPostsNoAI();
		console.log('POST!: ', post);
	};
	useEffect(() => {
		// if (user && user.uid) {
		// 	axios
		// 		.get(`/api/user/history/${user.uid}`)
		// 		.then((response) => {
		// 			setUserHistory(response.data);
		// 		})
		// 		.catch((error) => {
		// 			console.error('Error fetching user history:', error);
		// 		});
		// }
		// getPostsNoAI();
		// getPostsAI();
		getDatas();
	}, []);

	if (!user.displayName) {
		// If the user is not logged in, redirect to the main landing page
		navigate('/');
		return null;
	}

	const handleDelete = (id) => {
		axios
			.delete(`/api/user/history/${id}`)
			.then((response) => {
				const updatedUserHistory = post.filter((item) => item._id !== id);
				setPost(updatedUserHistory);
			})
			.catch((error) => {
				console.error('Error deleting history item:', error);
			});
	};
	if (!user.displayName) {
		// If the user is not logged in, redirect to the main landing page
		navigate('/');
		return null;
	}
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

	return (
		<div className={styles.landingPage}>
			<div className={styles.fantasy}>
				<div className={styles.tabcontainer}>
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
					{user.accessToken ? (
						<button
							className={styles.loginbutton}
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
				{/* <SavedResultsContainer results={savedResults} /> */}
				<div
					className={styles.generationscontainer}
					style={{ overflowY: 'scroll', height: '100vh' }}
				>
					{/* {userHistory.map((item) => (
						<HistoryContainer
							key={item._id}
							id={item._id}
							content={item.content}
							onDelete={handleDelete}
						/>
					))} */}
					<ul className='feed'>
						{/* // <li key={index}>
							// 	<p className='role' style={{ color: 'red' }}>
							// 		{message.role}
							// 	</p>
							// 	<p style={{ color: 'white' }}>{message.content}</p>
							// </li>
							// <GenerateContainerAI
							// 	text={message.content}
							// 	onSave={handleSave}
							// 	onDelete={handleDelete}
							// /> */}
						{/* {post?.map((message, index) => (
							<HistoryContainer
								key={message._id}
								id={message._id}
								content={message.content}
								onDelete={handleDelete}
							/>
						))} */}
						<div className={styles.divider}>
							<span></span>
							<span>AI Random</span>
							<span></span>
						</div>
						{postAI?.map((message, index) => (
							<HistoryContainer
								key={message._id + 'ai'}
								id={message._id}
								content={message.content}
								onDelete={handleDelete}
							/>
						))}
						<div className={styles.divider}>
							<span></span>
							<span>True Random</span>
							<span></span>
						</div>
						{postNoAI?.map((message, index) => (
							<HistoryContainer
								key={message._id}
								id={message._id}
								content={message.content}
								onDelete={handleDelete}
							/>
						))}
					</ul>
				</div>
			</div>
			{/* <ContainerFooter />
			<footer className={styles.copyright}>
				<div className={styles.privacyPolicyParent}>
					<div className={styles.saved}>Privacy Policy</div>
					<div className={styles.saved}>Terms of use</div>
				</div>
				<div className={styles.saved}>Test</div>
			</footer> */}
		</div>
	);
}

export default HistoryPage;