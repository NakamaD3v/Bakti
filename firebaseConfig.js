// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzmY32O6M_KTTpbzvpVcEwmdscuPwbKDE",
  authDomain: "bakti-cd727.firebaseapp.com",
  projectId: "bakti-cd727",
  storageBucket: "bakti-cd727.firebasestorage.app",
  messagingSenderId: "87358000517",
  appId: "1:87358000517:web:1f672f5f83c28e68f448ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};