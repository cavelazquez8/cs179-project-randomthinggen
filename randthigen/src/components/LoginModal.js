
import React, { useState } from "react";
import styles from "./LoginModal.module.css";

const LoginModal = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here 
    console.log("Login attempted with email:", email);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button className={styles.modalLoginButton} type="submit">Login</button>
        </form>
        <p>Don't have an account? <button className={styles.modalLoginButton} onClick={onSwitchToSignup}>Signup</button></p>
      </div>
    </div>
  );
};

export default LoginModal;