import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginDiv } from './UserCSS';
import firebase from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './LoginModal.module.css';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [disabled, setDisabled] = useState(false);
	let navigate = useNavigate();
	const register = async (e) => {
		e.preventDefault();
		setDisabled(true);
		if (!name || !email || !password || !passwordCheck) {
			return alert('Fill all of the values');
		}
		if (password !== passwordCheck) {
			return alert('PW and PW Check should be identical');
		}
		let createdUser = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		await createdUser.user.updateProfile({
			displayName: name,
		});
		console.log(createdUser);
		let body = {
			email: createdUser.user.multiFactor.user.email,
			displayName: createdUser.user.multiFactor.user.displayName,
			uid: createdUser.user.multiFactor.user.uid,
		};
		axios.post('/api/user/register', body).then((response) => {
			setDisabled(false);
			if (response.data.success) {
				navigate('/login');
			} else {
				return alert('Registration failed');
			}
		});
	};
	return (
		<LoginDiv>
			<div className={styles.modalBackdrop}>
				<div className={styles.modalContent}>
					<form>
						<label>Name</label>
						<input
							type='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label>Email</label>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Password</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label>Password Check</label>
						<input
							type='password'
							value={passwordCheck}
							onChange={(e) => setPasswordCheck(e.target.value)}
						/>

						<Link to='/register'>
							<button
								disabled={disabled}
								onClick={(e) => {
									register(e);
								}}
							>
								Register
							</button>
						</Link>
					</form>
				</div>
			</div>
		</LoginDiv>
	);
}

export default Register;