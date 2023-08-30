import ContainerFooter from '../components/ContainerFooter';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import generatecontainer from '../components/GenerateContainer.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import SavedContainer from '../components/SavedContainer';
import SavedResultsContainer from '../components/SavedResultsContainer';

function SavedPage() {
	const user = useSelector((state) => state.user);
	const [userSaved, setUserSaved] = useState([]);
	const [savedResults, setSavedResults] = useState([]);
	const navigate = useNavigate();

	const logoutHandler = () => {
		firebase.auth().signOut();
		navigate('/');
		window.location.reload();
	};

	useEffect(() => {
		console.log('user: ', user);
		if (user && user.uid) {
			axios
				.get(`/api/user/saved/${user.uid}`)
				.then((response) => {
					setUserSaved(response.data);
				})
				.catch((error) => {
					console.error('Error fetching user Saved:', error);
				});
		}
	}, [user]);

	const handleDelete = (id) => {
		axios
			.delete(`/api/user/saved/${id}`)
			.then((response) => {
				const updatedUserSaved = userSaved.filter((item) => item._id !== id);
				setUserSaved(updatedUserSaved);
			})
			.catch((error) => {
				console.error('Error deleting saved item:', error);
			});
	};

	if (!user.displayName) {
		// If the user is not logged in, redirect to the main landing page
		navigate('/');
		return null;
	}
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
				<SavedResultsContainer
					results={userSaved.map((savedResult) => savedResult.content)}
				/>
				<div
					className={styles.generationscontainer}
					style={{ overflowY: 'scroll', height: '100vh' }}
				>
					<ul className='feed'>
						{userSaved.map((item) => (
							<SavedContainer
								key={item._id}
								id={item._id}
								content={item.content}
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

export default SavedPage;