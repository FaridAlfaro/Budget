import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC8iUnlofnixIU6eX4mCtS_tHqxS5GSCOA",
  authDomain: "budget-tecnology.firebaseapp.com",
  projectId: "budget-tecnology",
  storageBucket: "budget-tecnology.appspot.com",
  messagingSenderId: "88340384121",
  appId: "1:88340384121:web:5c3a438335a3eca87a07a8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();