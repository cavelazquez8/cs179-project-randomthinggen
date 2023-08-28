import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginDiv } from './UserCSS';
import firebase from '../../firebase.js';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMessage, setErrMessage] = useState('');
	let navigate = useNavigate();
	const login = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert('Fill all the values');
		}
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			navigate('/');
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				setErrMessage('Email does not exist');
			} else if (error.code === 'auth/wrong-password') {
				setErrMessage('Password does not match');
			} else {
				setErrMessage('Login failed');
			}
		}
	};

	return (
		<LoginDiv>
			<form>
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
				{errMessage !== '' && <p>{errMessage}</p>}
				<button onClick={(e) => login(e)}>Log-In</button>
				<Link to='/register'>
					<button>Register</button>
				</Link>
			</form>
		</LoginDiv>
	);
}

export default Login;