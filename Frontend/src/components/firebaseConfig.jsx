// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "medic-7250d.firebaseapp.com",
    projectId: "medic-7250d",
    storageBucket: "medic-7250d.firebasestorage.app",
    messagingSenderId: "902634115650",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    console.log("User signed in successfully");
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export { auth, signInWithGoogle };
