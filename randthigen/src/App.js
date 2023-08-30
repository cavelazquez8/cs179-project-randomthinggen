import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SavedPage from './pages/SavedPage';
import HistoryPage from './pages/HistoryPage';
import { useEffect } from 'react';
import { loginUser, clearUser } from './Reducer/userSlice';
import firebase from './firebase.js';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((userInfo) => {
			console.log('Hello?');
			console.log(userInfo);
			if (userInfo !== null) {
				dispatch(loginUser(userInfo.multiFactor.user));
			}
		});
	}, []);

	useEffect(() => {
		//firebase.auth().signOut();
	}, []);
	useEffect(() => {
		console.log('user: ', user);
	}, [user]);
	useEffect(() => {
		if (action !== 'POP') {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	useEffect(() => {
		let title = '';
		let metaDescription = '';

		switch (pathname) {
			case '/':
				title = '';
				metaDescription = '';
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/saved' element={<SavedPage />} />
			<Route path='/history' element={<HistoryPage />} />
		</Routes>
	);
}
export default App;