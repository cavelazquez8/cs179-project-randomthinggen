import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import axios from 'axios';
import ContainerFooter from '../components/ContainerFooter';
import firebase from '../firebase.js';
import HistoryContainer from '../components/HistoryContainer';
import { Link } from 'react-router-dom';
function HistoryPage() {
  const user = useSelector((state) => state.user);
  const [userHistory, setUserHistory] = useState([]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    firebase.auth().signOut();
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    if (user && user.uid) {
      axios.get(`/api/user/history/${user.uid}`)
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
const handleDelete = (id) => {
    axios.delete(`/api/user/history/${id}`)
      .then(response => {
        const updatedUserHistory = userHistory.filter(item => item._id !== id);
        setUserHistory(updatedUserHistory);
      })
      .catch(error => {
        console.error("Error deleting history item:", error);
      });
  };
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
						<div className={styles.saved} onClick={() => navigate('/saved')}>Saved</div>
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
				<div className={styles.generationscontainer} style={{ overflowY: 'scroll', height: '100vh' }}>
					{userHistory.map(item => (
  <HistoryContainer 
    key={item._id} 
    id={item._id} 
    content={item.content} 
	onDelete={handleDelete}
  />
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
