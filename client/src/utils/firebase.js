// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interviewer-dd66d.firebaseapp.com",
  projectId: "ai-interviewer-dd66d",
  storageBucket: "ai-interviewer-dd66d.firebasestorage.app",
  messagingSenderId: "193138505620",
  appId: "1:193138505620:web:60d478c244244659c94181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth ,provider }