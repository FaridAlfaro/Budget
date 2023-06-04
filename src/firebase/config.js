// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Corrección en la importación

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8iUnlofnixIU6eX4mCtS_tHqxS5GSCOA",
  authDomain: "budget-tecnology.firebaseapp.com",
  projectId: "budget-tecnology",
  storageBucket: "budget-tecnology.appspot.com",
  messagingSenderId: "88340384121",
  appId: "1:88340384121:web:5c3a438335a3eca87a07a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
