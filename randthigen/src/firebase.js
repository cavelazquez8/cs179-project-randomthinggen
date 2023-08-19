// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAIfSA84sUq6COqs8vKLw-0Cl3C43kPSwA',
	authDomain: 'randomgenerator-c2f8b.firebaseapp.com',
	projectId: 'randomgenerator-c2f8b',
	storageBucket: 'randomgenerator-c2f8b.appspot.com',
	messagingSenderId: '774625507377',
	appId: '1:774625507377:web:e267fd177c8b9dea6a3d10',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
