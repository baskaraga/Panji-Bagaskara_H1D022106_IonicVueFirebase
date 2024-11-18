// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCtU8VGiqrDFHexLUzvGb9ReImtOgW2Ewg",
    authDomain: "vue-firebase-25bbc.firebaseapp.com",
    projectId: "vue-firebase-25bbc",
    storageBucket: "vue-firebase-25bbc.firebasestorage.app",
    messagingSenderId: "732793291366",
    appId: "1:732793291366:web:e8742654ffcfc8aff8e3a7"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };