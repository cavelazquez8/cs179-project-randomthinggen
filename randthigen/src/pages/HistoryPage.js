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
import { useState } from 'react';
import generatecontainer from '../components/GenerateContainer.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import {  Redirect } from 'react-router-dom';


function HistoryPage() {
    const user = useSelector((state) => state.user);
    const [userHistory, setUserHistory] = useState([]);
    const [generatedContainers, setGeneratedContainers] = useState([]);
	const [savedResults, setSavedResults] = useState([]);
    const navigate = useNavigate();

    const logoutHandler = () => {
		firebase.auth().signOut();
		navigate('/');
		window.location.reload();
	};
    
    useEffect(() => {
        if (user && user._id) {
            axios.get(`/api/user/history/${user._id}`)
                .then(response => {
                    setUserHistory(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user history:", error);
                });
        }
    }, [user]);

    if (!user.displayName) {
        // If the user is not logged in, redirect to the main landing page
        navigate("/");
        return null;
    }
    return (
        <div className={styles.landingPage}>
			<div className={styles.fantasy}>
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
					<button className={styles.loginbutton}>
						{/* <div className={styles.login}>Login</div> */}

						<Link to='//localhost:3001' className={styles.login}>
							Another
						</Link>

						<img
							className={styles.materialSymbolsloginIcon}
							alt=''
							src='/materialsymbolslogin.svg'
						/>
					</button>
				</div>
				<SavedResultsContainer />
				<div
					className={styles.generationscontainer}
					style={{ overflowY: 'scroll', height: '100vh' }}
				>
                 {userHistory.map(item => (
                     <div key={item._id}>
                         {item.content}
                     </div>
                 ))}
				</div>
			</div>
			<ContainerFooter />
			<footer className={styles.copyright}>
				<div className={styles.privacyPolicyParent}>
					<div className={styles.saved}>Privacy Policy</div>
					<div className={styles.saved}>Terms of use</div>
				</div>
				<div className={styles.saved}>Test</div>
			</footer>
		</div>
    );
}

export default HistoryPage;

