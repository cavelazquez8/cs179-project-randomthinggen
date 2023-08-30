
import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import firebase from '../firebase.js';
import axios from 'axios';


const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [errMessage, setErrMessage] = useState(''); // For error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMessage(''); // Reset error message
    
    if (!email || !password || (isSignup && !name)) {
      return setErrMessage('Fill all the values');
    }

    if (isSignup && password !== confirmPassword) {
      return setErrMessage('PW and PW Check should be identical');
    }

    try {
      let userCredential;
      if (isSignup) {
        userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({
          displayName: name,
        });
        const body = {
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        uid: userCredential.user.uid,
      };

      const response = await axios.post('/api/user/register', body);
      
      if (!response.data.success) {
        return setErrMessage('Registration failed');
      }
      } else {
        userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      }
      onClose(); // Close the modal on successful login or registration
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
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{isSignup ? "Signup" : "Login"}</h2>
                {errMessage && <p>{errMessage}</p>}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          )}
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          {isSignup && (
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          )}
          <button className={styles.modalLoginButton} type="submit">{isSignup ? "Signup" : "Login"}</button>
        </form>
        <p>
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <button className={styles.modalLoginButton} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
