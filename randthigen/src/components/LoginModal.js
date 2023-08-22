
import React, { useState } from "react";
import styles from "./LoginModal.module.css";

const LoginModal = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [isSignup, setIsSignup] = useState(false); // New state to determine if signup form should be displayed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup logic here
      console.log("Signup attempted with email:", email);
    } else {
      // Handle login logic here
      console.log("Login attempted with email:", email);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{isSignup ? "Signup" : "Login"}</h2>
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
